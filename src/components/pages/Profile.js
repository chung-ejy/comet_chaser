import React, {useContext,useEffect,Fragment } from 'react';
import DataContext from "../../context/data/dataContext"
// import Sentiment from '../sentiment/Sentiment';
// import Form from '../data/Form';
import { Navigate } from 'react-router-dom';
import TradeParams from '../data/TradeParams';
import TradeParamForm from '../data/TradeParamForm';
import KeyForm from "../data/KeyForm"

const Profile = () => {
    const dataContext = useContext(DataContext)
    const {loading
            ,getTradeParams
            ,setProduct
            ,isAuth
            ,user
            ,getBotStatus
            ,bot_status
            ,getSymbols
            ,updateBotStatus
            ,product
            } = dataContext;
    useEffect(() => {
        if (isAuth && user!==null) {
            getTradeParams()
            getBotStatus()
            getSymbols()
        }
    },//eslint-disable-next-line
    [product,user,isAuth]
    );

    const onClick = (e) => {
        if (product === "test"){
            setProduct("live")
        } else {
            setProduct("test")
        }
        
    }

    const onBigClick = (e) => {
        if (product === "test") {
            updateBotStatus({"test":!bot_status[product]})
        } else {
            updateBotStatus({"live":!bot_status[product]})
        }
        
    }

    return (<div className='card text-center mt-5'>
                <div className='card-body'>
                    <h1 onClick={onClick}className={`card-title text-center text-${bot_status[product] ? "primary": "secondary"}`}>
                        {"Comet " + product[0].toUpperCase() + product.slice(1)}
                        {bot_status !== null ? bot_status[product] ? " Online" : " Offline" : ""}
                    </h1>
                {!isAuth ? <Navigate to="/"/> : loading ? (
                    <h3 className="text-center m-3">
                    <i className="fas fa-spinner text-primary fa-7x"></i>
                    </h3>
                    ) : user !== null ? (
                        <Fragment>
                        <TradeParams />
                        <button type="button" onClick={onBigClick} className={`btn btn-${bot_status[product] ? "secondary": "primary"}`}>
                            {bot_status !== null ? bot_status[product] ? " SHUTDOWN" : " DEPLOY!!!" : ""}
                        </button>
                        <div className="row">
                        <div className="col-6"><TradeParamForm /></div>
                        <div className="col-6"><KeyForm /></div>
                        </div>
                        </Fragment>
                    )  : null
                }
            </div>
        </div>
    );
};

export default Profile
