import React, {useContext,useEffect,Fragment,useState} from 'react';
import DataContext from "../../context/data/dataContext"
import Alert from "../alerts/Alert"
// import Sentiment from '../sentiment/Sentiment';
// import Form from '../data/Form';
import IterationTable from '../data/IterationTable';
import HistoricalTable from '../data/HistoricalTable';
import OrderTable from '../data/OrderTable';
import TradeTable from '../data/TradeTable'
import ErrorTable from '../data/ErrorTable'
import TradeParams from '../data/TradeParams'
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
    const dataContext = useContext(DataContext)
    const [state,setState] = useState({"product":"test","table":"iterations"})
    const {data,loading,title,text,
            getHistoricals,getTradeParams,getFills,getOrders,getIterations,getTrades
                            ,setProduct
                            ,getCloudErrors
                            ,isAuth
                            ,user
                        } = dataContext;
    const {table,product} = state
    useEffect(() => {
        if (user!=null) {
            getTradeParams()
            getHistoricals()
            getIterations()
            getTrades()
            getCloudErrors()
            getOrders()
        } else {
            console.log("nouser")
        }
    },//eslint-disable-next-line
    [user,isAuth,product]
    );
    const onClick = (e) => {
        if (product == "test"){
            setState({...state,["product"]:"live"})
            // setProduct("live")
        } else {
            setState({...state,["product"]:"test"})
            // setProduct("test")
        }
        
    }

    const onOrder = (e) => {
        setState({...state,["table"]:"orders"})
    }

    const onHistorical = (e) => {
        setState({...state,["table"]:"historicals"})
    }

    const onIteration = (e) => {
        setState({...state,["table"]:"iterations"})
    }

    const onTrade = (e) => {
        setState({...state,["table"]:"trades"})
    }

    const onError = (e) => {
        setState({...state,["table"]:"errors"})
    }

    return (<div className='card text-center'>
                <div className='card-body'>
                             <Alert />
                            <h1 onClick={onClick}className="card-title justify-content-center">
                                {product[0].toUpperCase() + product.slice(1) + " Dashboard"}
                            </h1>
                {loading || title.size < 1 ? (
                    <Fragment>
                        <h3 className="text-center m-3">
                            <i className="fas fa-spinner text-primary fa-7x"></i>
                        </h3>
                    </Fragment>) : !isAuth ? (<Navigate to="/"/>) : (
                        <Fragment>
                            <button type="button" onClick={onIteration} class="btn btn-primary m-2">iterations</button>
                            <button type="button" onClick={onHistorical} class="btn btn-primary m-2">historicals</button>
                            <button type="button" onClick={onOrder} class="btn btn-primary m-2">orders</button>
                            <button type="button" onClick={onTrade} class="btn btn-primary m-2">trades</button>
                            <button type="button" onClick={onError} class="btn btn-primary m-2">errors</button>
                            {table == "orders" ? <OrderTable /> : table == "iterations" ? 
                            <Fragment> 
                                <TradeParams /> 
                                <IterationTable />
                            </Fragment>
                            : table == "historicals"? <HistoricalTable /> : table=="errors"? <ErrorTable></ErrorTable> : <TradeTable></TradeTable> }
                        </Fragment>
                    )
                }
            </div>
        </div>
    );
};

export default Dashboard
