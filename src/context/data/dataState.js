import {
        GET_HISTORICALS, 
        GET_ITERATIONS, 
        GET_ORDERS, 
        GET_TRADE_PARAMS ,
        GET_TRADES,
        GET_CLOUD_ERRORS,
        GET_BACKTEST,
        SET_TITLE, 
        SET_TEXT, 
        SET_LOADING, 
        STOP_LOADING, 
        SET_ERROR, 
        SET_PRODUCT,
        CLEAR_ERROR, 
        REGISTER,
        LOGIN,
        LOGOUT,
        FAILED_LOGIN,
        FAILED_REGISTER,
        GET_SYMBOLS} from "./types";

import React, { useReducer } from "react";
import DataContext from "./dataContext"
import dataReducer from "./dataReducer"
import axios from "axios"

const DataState = props => {
    const initialState = {
        title: "CometChaser",
        product: "test",
        trades:[],
        historicals:[],
        backtest:[],
        analysis:[],
        orders:[],
        iterations:[],
        trade_params:{},
        cloud_errors:[],
        available_symbols:[],
        isAuth:false,
        user:null,
        token:'',
        error:null,
        loading:false
    }
    const base_url = "https://cometchaserapi.herokuapp.com"
    const [state,dispatch] = useReducer(dataReducer,initialState)

    const setError = (msg,type) => {
        dispatch({
            type:SET_ERROR,
            payload: {msg,type}
        })
        setTimeout(()=> {
            clearError()
        },5000);
    }
    const clearError = () => {
        dispatch({
            type:CLEAR_ERROR
        });
    }

    const setLoading = () => {
        dispatch({
            type:SET_LOADING
        });
    }
    
    const stopLoading = () => {
        dispatch({
            type:STOP_LOADING
        });
    }

    const setTitle = (title) => {
        dispatch({
            type:SET_TITLE,
            payload: title
        });
    }

    const setProduct = (product) => {
        dispatch({
            type:SET_PRODUCT,
            payload: product
        });
    }

    const setText = (text) => {
        dispatch({
            type:SET_TEXT,
            payload: text
        });
    }

    const getTradeParams = () => { 
        setLoading()
        axios.get(`${base_url}/api/roster/`,{params:{version:state.product,username:state.user.username}}).then(res=>{
            dispatch({
                type:GET_TRADE_PARAMS,
                payload:res.data
            })
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }

    const getBacktest = (params) => { 
        setLoading()
        axios.post(`${base_url}/api/backtest/`,{params:params}).then(res=>{
            console.log(res.data)
            dispatch({
                type:GET_BACKTEST,
                payload:res.data

            })
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }

    const getHistoricals= () => {
        setLoading()
        axios.get(`${base_url}/api/reporter/`,{params:{version:state.product,username:state.user.username,data_request:"historicals"}}).then(res=>{
            dispatch({
                type:GET_HISTORICALS,
                payload:res.data.data
            })
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }

    const getOrders= () => {
        setLoading()
        axios.get(`${base_url}/api/reporter/`,{params:{version:state.product,username:state.user.username,data_request:"orders"}}).then(res=>{
            dispatch({
                type:GET_ORDERS,
                payload:res.data.data
            })
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }

    const getTrades= () => {
        setLoading()
        axios.get(`${base_url}/api/reporter/`,{params:{version:state.product,username:state.user.username,data_request:"trades"}}).then(res=>{
            dispatch({
                type:GET_TRADES,
                payload:res.data.data
            })
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }

    const getCloudErrors= () => {
        setLoading()
        axios.get(`${base_url}/api/reporter/`,{params:{version:state.product,username:state.user.username,data_request:"errors"}}).then(res=>{
            dispatch({
                type:GET_CLOUD_ERRORS,
                payload:res.data.data
            })
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }

    const getIterations= () => {
        setLoading()
        axios.get(`${base_url}/api/reporter/`,{params:{version:state.product,username:state.user.username,data_request:"iterations"}}).then(res=>{
            dispatch({
                type:GET_ITERATIONS,
                payload:res.data.data
            })
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }

    const getSymbols= () => {
        setLoading()
        axios.get(`${base_url}/api/backtest/`).then(res=>{
            dispatch({
                type:GET_SYMBOLS,
                payload:res.data
            })
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }

    
    const register = (data) => {
        setLoading()
        axios.post(`${base_url}/api/users/register/`,data).then(res=>{
            if(Object.keys(res.data).includes("error")){
                stopLoading()
                dispatch({
                    type:FAILED_REGISTER
                })
                setError(res.data.error,"danger")
            } else {
                dispatch({
                    type:REGISTER,
                    payload:res.data
                })
            }
        })
    }

    const login = (data) => {
        setLoading()
        axios.post(`${base_url}/api/users/login/`,data).then(res=>{
            if(Object.keys(res.data).includes("error")){
                stopLoading()
                dispatch({
                    type:FAILED_LOGIN
                })
                setError(res.data.error,"danger")
            } else {
                console.log("loggingin")
                dispatch({
                    type:LOGIN,
                    payload:res.data
                })
            } 
        })
    }

    const logout = () => {
        setLoading()
        const config = {
            headers : {
                "Content-Type":"application/json"
            }
        }
        config.headers["Authorization"] = `Token ${state.token}`
        axios.post(`${base_url}/api/users/logout/`,null,config).then(res=>{
            dispatch({
                type:LOGOUT
            })
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }

    return (
        <DataContext.Provider value={{
            historicals:state.historicals,
            trade_params:state.trade_params,
            orders:state.orders,
            iterations:state.iterations,
            loading:state.loading,
            error:state.error,
            title:state.title,
            text:state.text,
            trades:state.trades,
            product:state.product,
            backtest:state.backtest,
            cloud_errors:state.cloud_errors,
            available_symbols:state.available_symbols,
            analysis:state.analysis,
            isAuth:state.isAuth,
            user:state.user,
            token:state.token,
            register,
            login,
            logout,
            setError,
            setTitle,
            setText,
            getHistoricals,
            getIterations,
            getOrders,
            getTradeParams,
            getTrades,
            getCloudErrors,
            getBacktest,
            setProduct,
            getSymbols
        }}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataState;