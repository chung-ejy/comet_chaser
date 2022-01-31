import {
        GET_ITERATIONS, 
        GET_ORDERS, 
        GET_TRADE_PARAMS ,
        GET_TRADES,
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
        GET_USER,
        GET_SYMBOLS,
        UPDATE_TRADE_PARAMS,
        GET_BOT_STATUS,
        UPDATE_BOT_STATUS,
        UPDATE_KEYS,
        CREATE_SUBSCRIPTION,
        GET_SUBSCRIPTION,
        UPDATE_SUBSCRIPTION} from "./types";

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
        subscription:{},
        cloud_errors:[],
        available_symbols:["ALL"],
        bot_status:{},
        isAuth:false,
        user:null,
        token:localStorage.getItem('token'),
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
    
    const getOrders= () => {
        setLoading()
        axios.get(`${base_url}/api/reporter/order/`,{params:{version:state.product
            ,username:state.user.username}}).then(res=>{
            dispatch({
                type:GET_ORDERS,
                payload:res.data
            })
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }

    const getTrades= () => {
        setLoading()
        axios.get(`${base_url}/api/reporter/trade/`,{params:{version:state.product
            ,username:state.user.username}}).then(res=>{
            dispatch({
                type:GET_TRADES,
                payload:res.data
            })
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }

    const getIterations= () => {
        setLoading()
        axios.get(`${base_url}/api/reporter/iteration/`,{params:{version:state.product
            ,username:state.user.username}}).then(res=>{
            dispatch({
                type:GET_ITERATIONS,
                payload:res.data
            })
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }
    const getTradeParams = () => { 
        setLoading()
        axios.get(`${base_url}/api/trade_params/`,{params:{version:state.product
                                                ,username:state.user.username
                                                ,data_request:"user"}}).then(res=>{
            dispatch({
                type:GET_TRADE_PARAMS,
                payload:res.data
            })
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }

    const updateTradeParams = (params) => { 
        setLoading()
        params["version"] = state.product
        params["username"] = state.user.username
        axios.post(`${base_url}/api/trade_params/`,{params:params}).then(res=>{
            dispatch({
                type:UPDATE_TRADE_PARAMS,
                payload:res.data
            })
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }

    const updateBotStatus = (params) => { 
        setLoading()
        params["username"] = state.user.username
        params["data_request"] = "bot_status"
        axios.put(`${base_url}/api/roster/`,{params:params}).then(res=>{
            dispatch({
                type:UPDATE_BOT_STATUS,
                payload:res.data
            })
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }

    const updateKeys = (params) => { 
        // setLoading()
        params["username"] = state.user.username
        params["data_request"] = "keys"
        const data = {}
        Object.keys(params).map(key => params["key"] !== "" ? data[key] = params[key] : null) 
        axios.put(`${base_url}/api/roster/`,{params:params}).then(res=>{
            dispatch({
                type:UPDATE_KEYS
            })
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }

    const createSubscription = (params) => {
        setLoading()
        params["data_request"] = "subscriptions"
        params["active"] = true
        params["username"] = state.user.username
        axios.put(`${base_url}/api/roster/`,{params:params}).then(res=>{
            dispatch({
                type:CREATE_SUBSCRIPTION,
                payload:res.data
            })
            getSubscription()
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }

    const getSubscription = () => {
        setLoading()
        const params = {}
        params["username"] = state.user.username
        params["data_request"] = "subscriptions"
        axios.get(`${base_url}/api/roster/`,{params:params}).then(res=>{
            dispatch({
                type:GET_SUBSCRIPTION,
                payload:res.data
            })
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }

    const updateSubscription = () => {
        setLoading()
        const params = {}
        params["username"] = state.user.username
        params["subscription_id"] = state.subscription.subscription_id
        params["data_request"] = "subscriptions"
        params["active"] = false
        axios.put(`${base_url}/api/roster/`,{params:params}).then(res=>{
            dispatch({
                type:UPDATE_SUBSCRIPTION,
                payload:res.data
            })
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }

    const getBotStatus = () => { 
        setLoading()
        axios.get(`${base_url}/api/roster/`,{params:{version:state.product
            ,username:state.user.username,data_request:"bot_status"}}).then(res=>{
            dispatch({
                type:GET_BOT_STATUS,
                payload:res.data.bot_status
            })
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }

    const getBacktest = (params) => { 
        setLoading()
        axios.post(`${base_url}/api/backtest/`,{params:params}).then(res=>{
            dispatch({
                type:GET_BACKTEST,
                payload:res.data

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
                localStorage.removeItem('token')
                dispatch({
                    type:FAILED_REGISTER
                })
                setError(res.data.error,"danger")
            } else {
                localStorage.setItem('token', res.data.token)
                axios.post(`${base_url}/api/roster/`,data).then(res_2 => {
                    dispatch({
                        type:REGISTER,
                        payload:res.data
                    })            
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
                localStorage.setItem('token', res.data.token)
                dispatch({
                    type:LOGIN,
                    payload:res.data
                })
            } 
        })
    }

    const loadUser = () => {
        setLoading()
        const config = {
            headers : {
                "Content-Type":"application/json"
            }
        }
        config.headers["Authorization"] = `Token ${localStorage.getItem("token")}`
        axios.get(`${base_url}/api/users/user/`, config).then(res=>{
            if(Object.keys(res.data).includes("error")){
                stopLoading()
                dispatch({
                    type:FAILED_LOGIN
                })
            } else {
                dispatch({
                    type:GET_USER,
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
            localStorage.removeItem('token')
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
            bot_status:state.bot_status,
            subscription: state.subscription,
            createSubscription,
            getSubscription,
            updateSubscription,
            getBotStatus,
            register,
            login,
            logout,
            setError,
            setTitle,
            setText,
            getIterations,
            getOrders,
            getTradeParams,
            updateTradeParams,
            getTrades,
            getBacktest,
            setProduct,
            getSymbols,
            loadUser,
            updateBotStatus,
            updateKeys
        }}>
            {props.children}
        </DataContext.Provider>
    )
}
  
export default DataState;