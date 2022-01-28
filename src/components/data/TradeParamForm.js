import React, { useContext,useState, useEffect } from 'react'
import DataContext from '../../context/data/dataContext'

const TradeParamForm = () => {
    const dataContext = useContext(DataContext)
    const {trade_params,isAuth,loading, available_symbols,updateTradeParams,product,user} = dataContext
    const [state,setState] = useState(
        {
            retrack_days:3,
            signal: 3,
            req:1,
            positions:1,
            entry_strategy: "all",
            exit_strategy: "adaptive_hold",
            value: false,
            conservative: true,
            whitelist_symbols:["ALL"],
            start:"2021-01-01T00:00",
            end: "2022-01-01T00:00"          
        }
    )
    useEffect(() => {
        if (isAuth && user!==null) {
            Object.keys(trade_params).map(key => setState({...state,[key]:trade_params[key]}))
            try{
                setState({...state,["whitelist_symbols"]:trade_params["whitelist_symbols"]})
            } catch (error ){
                setState({...state,["whitelist_symbols"]:["ALL"]})
            }
        }
    },//eslint-disable-next-line
    [product,user,isAuth]
    );
    const {whitelist_symbols} = state
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
        if (state[e.target.name]===false){
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
    return (loading || !isAuth || user===null ? "" :
        <div className="card card-body mt-4 mb-4">
            <div className="row mt-2">
            <form className="col" onSubmit={onSubmit}>
            {/* numericals */}
            <h5>Trading Parameters</h5>
                {["retrack_days","signal","req","positions"].map( key =>
                        (<div className="form-group row mt-2" key={key}>
                        <label className="col-form-label col-sm-7">{`${key}: `}</label>
                        <input className="form-control-number col-sm-5" onChange={onChange}
                            name={key} placeholder={key} type="number" value={state[key]} />
                        </div>))}
            {/* booleans */}
            <div className="form-group row mt-2">
            {["value","conservative"].map(key => ( 
                                <div className="col" key={key}>
                                   <button onClick={onRadio} name={key} className={`btn btn-${state[key] === false ? "danger" : "primary"} form-control`}>{key}</button>
                               </div>))}
            </div>
            {/* strategies */}
            <div className="form-group row mt-2">
            {["entry_strategy","exit_strategy"].map(key => (
                <div className="col" key={key}>
                        <label className="col-form-label">{key}</label>
                        <select placeholder="strategy" name={key} onChange={onChange} className="form-control">
                        {key === "entry_strategy" ? entries.map(entry=> <option key={entry}>{entry}</option>) : 
                        exits.map(entry=> <option key={entry}>{entry}</option>)}
                        </select>
                </div>
            ))}
            </div>
            {/* symbols */}
            
            {/* <div key={"symbols"} className="form-group row mt-2">
                <div key={"symbols"} className="col ml-3">
                    <label className="col-form-label">Add Crypto</label>
                    <select placeholder="ALL" name={"symbols"} onChange={onSymbol} className="form-control">
                    {available_symbols.map(symbol=> <option key={symbol} value={symbol}>{symbol}</option>)}
                    <option key ={"ALL"}>ALL</option>
                    </select>
                </div>
            </div>  */}
                <div className="form-group row mt-2">
                    <div className="col">
                    <button type="submit" className="btn btn-primary form-control col">Update</button>
                    </div>
                </div>
            </form>
            {/* <div className="col">
                <h5>Included Crypto</h5>
                <ul>
                {user!==null && isAuth && !loading ? whitelist_symbols.map(symbol => <li className="list-group-item" onClick={onDeleteSymbol} key={symbol} value={symbol} >{symbol}</li>) : null}
                </ul>
            </div> */}
            </div>
        </div>
    )
}

export default TradeParamForm
