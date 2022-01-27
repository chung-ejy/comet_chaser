import React, {useContext,useEffect,Fragment,useState} from 'react';
import DataContext from "../../context/data/dataContext"
// import Sentiment from '../sentiment/Sentiment';
// import Form from '../data/Form';
import { Navigate } from 'react-router-dom';
import TradeParams from '../data/TradeParams';
import TradeParamForm from '../data/TradeParamForm';
import KeyForm from "../data/KeyForm"

const Profile = () => {
    const dataContext = useContext(DataContext)
    const [state,setState] = useState({"product":"test"})
    const {loading,title
            ,getTradeParams
            ,loadUser
            ,setProduct
            ,isAuth
            ,user
            ,getBotStatus
            ,bot_status
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
            if (isAuth) {
                loadUser()
            }
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
        console.log("clicked!",product)
        if (product === "test") {
            updateBotStatus({"test":!bot_status[product]})
        } else {
            updateBotStatus({"live":!bot_status[product]})
        }
        
        // setState({...state,["product"]:"live"})
        // setProduct("live"
        
    }

    return (<div className='card text-center mt-5'>
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
                        <button type="button" onClick={onBigClick} className="btn btn-primary">
                            {bot_status !== null ? bot_status[product] ? " SHUTDOWN" : " TURNON" : ""}
                        </button>
                        <KeyForm />
                        </Fragment>
                    ) : <Navigate to="/"    />
                }
            </div>
        </div>
    );
};

export default Profile
