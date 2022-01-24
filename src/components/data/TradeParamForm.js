import React, { useContext,useState,useEffect } from 'react'
import DataContext from '../../context/data/dataContext'

const TradeParamForm = () => {
    const dataContext = useContext(DataContext)
    const {trade_params,isAuth,loading, available_symbols,updateTradeParams} = dataContext
    const [state,setState] = useState(
        trade_params
    )
    const  {           
        whitelist_symbols,
    } = state;
    const onSymbol = (e) => {
        setState({...state,[e.target.name]:[...state[e.target.name],e.target.value]});
    }

    const onDeleteSymbol = (e) => {
        setState({...state,["whitelist_symbols"]:[...state["whitelist_symbols"]].filter(val => val !== e.target.textContent)});
    }

    const onChange = (e) => {
        setState({...state,[e.target.name]:e.target.value});
    }

    const onRadio = (e) => {
        e.preventDefault()
        if (state[e.target.name]==false){
            setState({...state,[e.target.name]:true})
        } else {
            setState({...state,[e.target.name]:false})
        }
        
    }
    const onSubmit = (e) => {
        e.preventDefault()
        updateTradeParams(state)
    }
    const entries = ["standard","parameter_defined","all"]
    const exits = ["due_date","hold","adaptive_hold","adaptive_due_date"]
    return (loading || !isAuth || available_symbols == null || whitelist_symbols == null ? "" :
        <div className="card card-body mt-4 mb-4">
            <div className="row mt-2">
            <form className="col"onSubmit={onSubmit}>
            {/* numericals */}
            <h5>Backtest Parameters</h5>
            <div className="form-group row mt-2">
                {["retrack_days","signal","req","positions"].map( key =>
                        (<div className="col">
                        <label className="col-form-label" htmlFor="formRange">{`${key}: ${state[key]} `}</label>
                        <input onChange={onChange} className="form-range"
                            name={key} placeholder={key} type="range" step="1" min="1" max="14" value={state[key]} />
                        </div>))}
            </div> 
            {/* booleans */}
            <div className="form-group row mt-2">
            {["value","conservative"].map(key => ( 
                                <div className="col">
                                   <button onClick={onRadio} name={key} class={`btn btn-${state[key] == false ? "danger" : "primary"} form-control`}>{key}</button>
                               </div>))}
            </div>
            {/* strategies */}
            <div className="form-group row mt-2">
            {["entry_strategy","exit_strategy"].map(key => (
                <div className="col">
                        <label className="col-form-label">{key}</label>
                        <select placeholder="strategy" name={key} onChange={onChange} className="form-control">
                        {key == "entry_strategy" ? entries.map(entry=> <option key={entry}>{entry}</option>) : 
                        exits.map(entry=> <option key={entry}>{entry}</option>)}
                        </select>
                </div>
            ))}
            </div>
            {/* symbols */}
            
            <div key={"symbols"} className="form-group row mt-2">
                <div key={"symbols"} className="col ml-3">
                    <label className="col-form-label">Add Crypto</label>
                    <select placeholder="ALL" name={"symbols"} onChange={onSymbol} className="form-control">
                    {available_symbols.map(symbol=> <option key={symbol} value={symbol}>{symbol}</option>)}
                    <option key ={"ALL"}>ALL</option>
                    </select>
                </div>
            </div> 
                <div className="form-group row mt-2">
                    <div className="col">
                    <button type="submit" class="btn btn-primary form-control col">Update</button>
                    </div>
                </div>
            </form>
            <div className="col">
                <h5>Included Crypto</h5>
                <ul>
                {whitelist_symbols.map(symbol => <li className="list-group-item" onClick={onDeleteSymbol} value={symbol} >{symbol}</li>)}
                </ul>
            </div>
            </div>
        </div>
    )
}

export default TradeParamForm
