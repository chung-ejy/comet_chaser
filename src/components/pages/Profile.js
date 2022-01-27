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
            ,updateBotStatus,
            trade_params
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
        
    }

    return (<div className='card text-center mt-5'>
                <div className='card-body'>
                    <h1 onClick={onClick}className={`card-title justify-content-center text-${bot_status[product] ? "primary": "secondary"}`}>
                        {"Comet " + product[0].toUpperCase() + product.slice(1)}
                        {bot_status !== null ? bot_status[product] ? " Online" : " Offline" : ""}
                    </h1>
                {loading || !isAuth || user==null ? (
                    <h3 className="text-center m-3">
                    <i className="fas fa-spinner text-primary fa-7x"></i>
                    </h3>
                    ) : isAuth ? (
                        <Fragment>
                        <TradeParams />

                        <button type="button" onClick={onBigClick} className={`btn btn-${bot_status[product] ? "secondary": "primary"}`}>
                            {bot_status !== null ? bot_status[product] ? " SHUTDOWN" : " DEPLOY!!!" : ""}
                        </button>
                        <div className="row">
                        {/* <div className="col-6"><TradeParamForm /></div> */}
                        <div className="col-6"><KeyForm /></div>
                        </div>
                        </Fragment>
                    ) : <Navigate to="/"    />
                }
            </div>
        </div>
    );
};

export default Profile
