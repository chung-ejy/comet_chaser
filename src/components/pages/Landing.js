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

const Dashboard = () => {
    const dataContext = useContext(DataContext)
    const [state,setState] = useState({"product":"test","table":"iterations"})
    const {data,loading,title,text,
            getHistoricals,getTradeParams,getFills,getOrders,getIterations,getTrades
                            ,setProduct
                            ,getCloudErrors
                            ,isAuth
                        } = dataContext;
    const {table,product} = state
    useEffect(() => {
        getIterations()
        getHistoricals()
        getFills()
        getOrders()
        getTradeParams()
        getTrades()
        getCloudErrors()
    },//eslint-disable-next-line
    [product,isAuth]
    );
    const onClick = (e) => {
        if (product == "test"){
            setState({...state,["product"]:"live"})
            setProduct("live")
        } else {
            setState({...state,["product"]:"test"})
            setProduct("test")
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
                                CometChaser
                            </h1>
                {loading || title.size < 1 ? (
                    <Fragment>
                        <h3 className="text-center m-3">
                            <i className="fas fa-spinner text-primary fa-7x"></i>
                        </h3>
                    </Fragment>) : (
                        <p>
                            Welcome to CometChaser!
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default Dashboard
