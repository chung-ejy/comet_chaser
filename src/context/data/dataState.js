import { GET_DATA,  
        GET_HISTORICALS, 
        GET_ITERATIONS, 
        GET_ORDERS, 
        GET_FILLS, 
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
        GET_SYMBOLS} from "./types";

import React, { useReducer } from "react";
import DataContext from "./dataContext"
import dataReducer from "./dataReducer"
import axios from "axios"

const DataState = props => {
    const initialState = {
        title: "Stargazer",
        product: "test",
        trades:[],
        data: {},
        historicals:[],
        backtest:[],
        analysis:[],
        orders:[],
        fills:[],
        iterations:[],
        trade_params:{},
        cloud_errors:[],
        available_symbols:[],
        error:null,
        loading:false
    }
    const base_url = "http://localhost:8000"
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

    const getData = (data) => {
        setLoading()
        axios.get(`${base_url}/api/${state.product}/`,data).then(res=>{
            dispatch({
                type:GET_DATA,
                payload:res.data
            })
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }

    const getTradeParams = () => { 
        setLoading()
        axios.get(`${base_url}/api/${state.product}/`,{params:{data_request:"trade_params"}}).then(res=>{
            dispatch({
                type:GET_TRADE_PARAMS,
                payload:res.data[0]

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
        axios.get(`${base_url}/api/${state.product}/?data_request=historicals`).then(res=>{
            dispatch({
                type:GET_HISTORICALS,
                payload:res.data
            })
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }

    const getFills= () => {
        setLoading()
        axios.get(`${base_url}/api/${state.product}/?data_request=fills`).then(res=>{
            dispatch({
                type:GET_FILLS,
                payload:res.data
            })
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }

    const getOrders= () => {
        setLoading()
        axios.get(`${base_url}/api/${state.product}/?data_request=all_orders`).then(res=>{
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
        axios.get(`${base_url}/api/${state.product}/?data_request=all_trades`).then(res=>{
            dispatch({
                type:GET_TRADES,
                payload:res.data
            })
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }

    const getCloudErrors= () => {
        setLoading()
        axios.get(`${base_url}/api/${state.product}/?data_request=errors`).then(res=>{
            dispatch({
                type:GET_CLOUD_ERRORS,
                payload:res.data
            })
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }

    const getIterations= () => {
        setLoading()
        axios.get(`${base_url}/api/${state.product}/?data_request=iterations`).then(res=>{
            dispatch({
                type:GET_ITERATIONS,
                payload:res.data
            })
        }).catch(err => {
            stopLoading()
            setError(err.message,"danger")
        });
    }

    const getSymbols= () => {
        setLoading()
        axios.get(`${base_url}/api/backtest/?data_request=symbols`).then(res=>{
            dispatch({
                type:GET_SYMBOLS,
                payload:res.data.symbols
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
            fills:state.fills,
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
            setError,
            setTitle,
            setText,
            getData,
            getFills,
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