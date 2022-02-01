import React, {useContext,useEffect,Fragment} from 'react';
import DataContext from "../../context/data/dataContext"
// import Sentiment from '../sentiment/Sentiment';
// import Form from '../data/Form';
import BackTestForm from '../data/BackTestForm';
import BacktestTable from '../data/BacktestTable';
import AnalysisViz from '../data/AnalysisViz';
const Backtest = () => {
    const dataContext = useContext(DataContext)
    const {loading, getSymbols, product } = dataContext;
    useEffect(() => {
        getSymbols()
    },//eslint-disable-next-line
    [product]
    );

    return (<div className='card text-center mt-5'>
                <div className='card-body'>
                <h1 className="card-title text-center">
                    Backtesting Dashboard
                </h1>
                {loading ? (
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
