import React, {useContext,useEffect,Fragment,useState} from 'react';
import DataContext from "../../context/data/dataContext"
import Alert from "../alerts/Alert"
// import Sentiment from '../sentiment/Sentiment';
// import Form from '../data/Form';
import { Navigate } from 'react-router-dom';
import TradeParams from '../data/TradeParams';
import TradeParamForm from '../data/TradeParamForm';

const Profile = () => {
    const dataContext = useContext(DataContext)
    const [state,setState] = useState({"product":"test"})
    const {loading,title,
            getHistoricals,getTradeParams,getOrders,getIterations,getTrades, loadUser
                            ,setProduct
                            ,getCloudErrors
                            ,isAuth
                            ,user
                            ,getBotStatus
                            ,bot_status
                            ,trade_params
                            ,getSymbols
                            ,updateBotStatus
                        } = dataContext;
    const {product} = state
    useEffect(() => {
        if (user!=null && isAuth) {
            getTradeParams()
            getBotStatus()
            getSymbols()
        } else {
            loadUser()
        }
    },//eslint-disable-next-line
    [user,product,isAuth]
    );
    const onClick = (e) => {
        if (product === "test"){
            setState({...state,["product"]:"live"})
            setProduct("live")
        } else {
            setState({...state,["product"]:"test"})
            setProduct("test")
        }
        
    }

    const onBigClick = (e) => {
        if (bot_status[product]){
            console.log("shuttingdown!",product)
            updateBotStatus({"version":product})
            // setState({...state,["product"]:"live"})
            // setProduct("live")
        } else {
            // setState({...state,["product"]:"test"})
            // setProduct("test")
            console.log("turningon!",product)
        }
        
    }

    return (<div className='card text-center'>
                <div className='card-body'>
                    <h1 onClick={onClick}className="card-title justify-content-center">
                        {product[0].toUpperCase() + product.slice(1) + " BOT" }
                        {bot_status !== null ? bot_status[product] ? " LIVE" : " OFFLINE" : ""}
                    </h1>
                {loading || title.size < 1 ? (
                    <h3 className="text-center m-3">
                    <i className="fas fa-spinner text-primary fa-7x"></i>
                    </h3>
                    ) : isAuth ? (
                        <Fragment>
                        <TradeParams />
                        <TradeParamForm />
                        <button type="button" onClick={onBigClick} class="btn btn-primary">
                            {bot_status !== null ? bot_status[product] ? " SHUTDOWN" : " TURNON" : ""}
                        </button>
                        <div></div>
                        </Fragment>
                    ) : <Navigate to="/"    />
                }
            </div>
        </div>
    );
};

export default Profile
