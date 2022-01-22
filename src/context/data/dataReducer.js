import { GET_DATA, SET_TITLE, SET_TEXT, SET_LOADING,
        GET_HISTORICALS, 
        GET_ITERATIONS, 
        GET_ORDERS, 
        GET_FILLS, 
        GET_TRADE_PARAMS , STOP_LOADING,SET_PRODUCT, SET_ERROR, CLEAR_ERROR, GET_TRADES, GET_CLOUD_ERRORS,GET_BACKTEST,GET_SYMBOLS } from "./types";
export default(state,action) => {
    switch(action.type) {
        case SET_ERROR:
            return {
                ...state,
                error: {msg:"rekt",type:"big sadge"}
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error:null
            }
        case SET_LOADING:
            return {
                ...state,
                loading:true
            }
        case SET_TEXT:
            return {
                ...state,
                text: action.payload
            }
        case SET_TITLE:
            return {
                ...state,
                title:action.payload
            }
        
        case SET_PRODUCT:
                return {
                    ...state,
                    product:action.payload
                }
        case GET_DATA:
            return {
                ...state,
                data:action.payload,
                loading:false
            }
        case GET_HISTORICALS:
            return {
                ...state,
                historicals:action.payload,
                loading:false
            }
        case GET_BACKTEST:
                return {
                    ...state,
                    backtest:action.payload.trades,
                    analysis:action.payload.analysis.map(d => ({...d,["date"]: Date.parse(d["date"])})),
                    loading:false
                }
        case GET_ITERATIONS:
                return {
                    ...state,
                    iterations:action.payload,
                    loading:false
                }
        case GET_FILLS:
            return {
                ...state,
                fills:action.payload,
                loading:false
            }
        case GET_ORDERS:
                return {
                    ...state,
                    orders:action.payload,
                    loading:false
                }
        case GET_TRADES:
                return {
                    ...state,
                    trades:action.payload,
                    loading:false
                }
        case GET_TRADE_PARAMS:
                    return {
                        ...state,
                        trade_params:action.payload,
                        loading:false
                    }
        
        case GET_CLOUD_ERRORS:
            return {
                ...state,
                cloud_errors:action.payload,
                loading:false
            }
        case GET_SYMBOLS:
                return {
                    ...state,
                    available_symbols:action.payload,
                    loading:false
                }
            
    }
}