import React, {useContext,useEffect,Fragment } from 'react';
import DataContext from "../../context/data/dataContext"
// import Sentiment from '../sentiment/Sentiment';
// import Form from '../data/Form';
import { Navigate } from 'react-router-dom';
import TradeParams from '../data/TradeParams';
import KeyForm from "../data/KeyForm"
import Paypal from '../payments/Paypal';
import ProfileTable from '../data/ProfileTable';

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
            ,subscription
            ,getSubscription
            } = dataContext;
    useEffect(() => {
        if (isAuth && user!==null) {
            getTradeParams()
            getBotStatus()
            getSubscription()
            // getSymbols()
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

    return (<div className='card text-center mt-5'>
                <div className='card-body'>
                    <h1>
                        Profile
                    </h1>
                {!isAuth ? <Navigate to="/"/> : loading ? (
                    <h3 className="text-center m-3">
                    <i className="fas fa-spinner text-primary fa-7x"></i>
                    </h3>
                    ) : user !== null ? (
                        <Fragment>
                        <div className="row">
                        <div className="col-4"><ProfileTable /></div>
                        <div className="col-4"><KeyForm /></div>
                        <div className="col-4"><Paypal /></div>
                        </div>
                        </Fragment>
                    )  : null
                }
            </div>
        </div>
    );
};

export default Profile
