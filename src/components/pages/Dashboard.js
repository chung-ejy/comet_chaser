import React, {useContext,useEffect,Fragment,useState} from 'react';
import DataContext from "../../context/data/dataContext"
// import Alert from "../alerts/Alert"
import IterationTable from '../data/IterationTable';
// import HistoricalTable from '../data/HistoricalTable';
import OrderTable from '../data/OrderTable';
import TradeTable from '../data/TradeTable'
// import ErrorTable from '../data/ErrorTable'
import TradeParams from '../data/TradeParams'
import { Navigate } from 'react-router-dom';
import TradeParamForm from '../data/TradeParamForm';
const Dashboard = () => {
    const dataContext = useContext(DataContext)
    const [state,setState] = useState({"table":"iterations"})
    const {loading,title,getTradeParams,getOrders,getIterations,getTrades, loadUser
        , bot_status
                            ,setProduct
                            ,getBotStatus
                            ,updateBotStatus
                            ,isAuth
                            ,user
                            ,product
                            ,getSymbols
                        } = dataContext;
    const {table} = state
    useEffect(() => {
        if (user!=null && isAuth) {
            getTradeParams()
            getBotStatus()
            getIterations()
            getOrders()
            getTrades()
            getSymbols()
        } else {
            if (isAuth) {
                loadUser()
            }
        }
    },//eslint-disable-next-line
    [user,isAuth,product]
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

    const onOrder = (e) => {
        setState({...state,["table"]:"orders"})
    }

    const onIteration = (e) => {
        setState({...state,["table"]:"iterations"})
    }

    const onTrade = (e) => {
        setState({...state,["table"]:"trades"})
    }

    return (<div className='card text-center mt-5'>
                <div className='card-body'>
                             {/* <Alert /> */}
                            <h1 onClick={onClick}className={`card-title text-center text-${bot_status[product] ? "primary": "secondary"}`}>
                                {"Comet " + product[0].toUpperCase() + product.slice(1) + `${bot_status !== null ? bot_status[product] ? " Online" : " Offline" : ""}`}
                            </h1>
                {loading || title.size < 1 ? (
                    <Fragment>
                        <h3 className="text-center m-3">
                            <i className="fas fa-spinner text-primary fa-7x"></i>
                        </h3>
                    </Fragment>) : !isAuth ? (<Navigate to="/"/>) : (
                        <Fragment>
                            <button type="button" onClick={onIteration} className="btn btn-primary m-2">iterations</button>
                            <button type="button" onClick={onOrder} className="btn btn-primary m-2">orders</button>
                            <button type="button" onClick={onTrade} className="btn btn-primary m-2">trades</button>
                            <div className="row align-vertical-center">
                                <div className="col-6"><TradeParams /></div>
                                <div className="col-6"><TradeParamForm /></div>
                            </div>
                            <button type="button" onClick={onBigClick} className={`btn btn-${bot_status[product] ? "secondary": "primary"}`}>
                            {bot_status !== null ? bot_status[product] ? " SHUTDOWN" : " DEPLOY!!!" : ""}
                        </button>
                            {table === "orders" ? <OrderTable /> : table === "iterations" ? 
                            <Fragment> 
                                <IterationTable />
                            </Fragment>
                            : <TradeTable></TradeTable> 
                            }
                        </Fragment>
                    )
                }
            </div>
        </div>
    );
};

export default Dashboard
