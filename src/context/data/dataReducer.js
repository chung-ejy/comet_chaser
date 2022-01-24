import { GET_DATA, SET_TITLE, SET_TEXT, SET_LOADING,
        GET_HISTORICALS, 
        GET_ITERATIONS, 
        GET_ORDERS, 
        GET_FILLS, 
        GET_TRADE_PARAMS ,SET_PRODUCT, SET_ERROR, CLEAR_ERROR, 
        GET_TRADES, GET_CLOUD_ERRORS,GET_BACKTEST,GET_SYMBOLS, REGISTER,LOGIN,LOGOUT,FAILED_LOGIN,FAILED_REGISTER,GET_USER, GET_BOT_STATUS, UPDATE_TRADE_PARAMS } from "./types";

const main_reducer = (state,action) => {
    switch(action.type) {
        default:
            return {
                ...state
            }
        case SET_ERROR:
            return {
                ...state,
                error: {msg:action.payload.msg,type:action.payload.type}
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
        case UPDATE_TRADE_PARAMS:
        case GET_TRADE_PARAMS:
                    return {
                        ...state,
                        trade_params:action.payload,
                        loading:false
                    }
        case GET_BOT_STATUS:
            return {
                ...state,
                bot_status:action.payload,
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
            
        case REGISTER:
                return {
                    ...state,
                    user:action.payload.user,
                    isAuth:true,
                    token:action.payload.token,
                    loading:false
                }
        case FAILED_REGISTER:
            return {
                ...state,
                user:null,
                isAuth:false,
                token:"",
                loading:false
            }
        case LOGIN:
                return {
                    ...state,
                    user:action.payload.user,
                    isAuth:true,
                    token:action.payload.token,
                    loading:false
                }
        case GET_USER:
                    return {
                        ...state,
                        user:action.payload,
                        isAuth:true,
                        loading:false
                    }
        case FAILED_LOGIN:
                return {
                    ...state,
                    user:null,
                    isAuth:false,
                    token:"",
                    loading:false
                }

        case LOGOUT:
            return {
                ...state,
                user:null,
                isAuth:false,
                token:"",
                loading:false
            }
            
    }
}

export default main_reducer