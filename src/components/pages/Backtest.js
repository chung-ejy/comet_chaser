import React, {useContext,useEffect,Fragment,useState} from 'react';
import DataContext from "../../context/data/dataContext"
import Alert from "../alerts/Alert"
// import Sentiment from '../sentiment/Sentiment';
// import Form from '../data/Form';
import BackTestForm from '../data/BackTestForm';
import BacktestTable from '../data/BacktestTable';
import AnalysisViz from '../data/AnalysisViz';
const Backtest = () => {
    const dataContext = useContext(DataContext)
    const [state,setState] = useState({"product":"test","table":"iterations"})
    const {loading,title
                            ,setProduct,getSymbols
                        } = dataContext;
    const {product} = state
    useEffect(() => {
        getSymbols()
    },//eslint-disable-next-line
    [product]
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

    return (<div className='card text-center'>
                <div className='card-body'>
                             <Alert />
                            <h1 onClick={onClick}className="card-title justify-content-center">
                                Backtesting Dashboard
                            </h1>
                {loading || title.size < 1 ? (
                    <Fragment>
                        <h3 className="text-center m-3">
                            <i className="fas fa-spinner text-primary fa-7x"></i>
                        </h3>
                    </Fragment>) : (
                        <Fragment>
                        <BackTestForm></BackTestForm>
                        <AnalysisViz></AnalysisViz>
                        <BacktestTable></BacktestTable>
                        </Fragment>
                    )
                }
            </div>
        </div>
    );
};

export default Backtest
