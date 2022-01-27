import React, { useContext,useState } from 'react'
import DataContext from '../../context/data/dataContext'

const BackTestForm = () => {
    const dataContext = useContext(DataContext)
    const {getBacktest,available_symbols} = dataContext
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
            symbols:["ALL"],
            start:"2021-01-01T00:00",
            end: "2022-01-01T00:00"          
        }
    )
    const  {           
        symbols,
    } = state;

    const onSymbol = (e) => {
        setState({...state,[e.target.name]:[...state[e.target.name],e.target.value]});
    }

    const onDeleteSymbol = (e) => {
        setState({...state,["symbols"]:[...state["symbols"]].filter(val => val !== e.target.textContent)});
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
        getBacktest(state)
    }
    const entries = ["standard","signal_based","parameter_defined","all"]
    const exits = ["due_date","hold","adaptive_hold","adaptive_due_date"]
    return (
        <div className="card card-body mt-4 mb-4">
            <div className="row mt-2">
            <form className="col"onSubmit={onSubmit}>
            {/* numericals */}
            <h5>Backtest Parameters</h5>
                {["retrack_days","signal","req","positions"].map( key =>
                        (<div className="form-group row mt-7" key={key}>
                        <label className="col-form-label col-sm-7">{`${key}: `}</label>
                        <input className="form-control-number col-sm-5" onChange={onChange}
                            name={key} placeholder={key} type="number" value={state[key]} />
                        </div>))}
            {/* booleans */}
            <div className="form-group row mt-2">
            {["value","conservative"].map(key => ( 
                                <div key={key} className="col">
                                   <button onClick={onRadio} name={key} 
                                   className={`btn btn-${state[key] == false 
                                   ? "danger" : "primary"} form-control`}>{key}
                                   </button>
                               </div>))}
            </div>
            {/* strategies */}
            <div className="form-group row mt-2">
            {["entry_strategy","exit_strategy"].map(key => (
                <div key={key} className="col">
                        <label className="col-form-label">{key}</label>
                        <select placeholder="strategy" name={key} onChange={onChange} 
                        className="form-control">
                        {key == "entry_strategy" ? entries.map(entry=> 
                        <option key={entry}>{entry}</option>) : 
                        exits.map(entry=> <option key={entry}>{entry}</option>)}
                        </select>
                </div>
            ))}
            </div>
            {/* dates */}
            <div className="form-group row mt-2">
            {["start","end"].map(key =>
                    (<div key={key} className="col">
                    <label className="col-form-label">{key}</label>
                    <input className="form-control" onChange={onChange} 
                    type="datetime-local" 
                        name={key} value={state[key]}
                        min="2021-01-01T00:00" max="2022-01-01T00:00" /> 
                    </div> ))}
            </div>
            {/* symbols */}
            
            <div key={"symbols"} className="form-group row mt-2">
                <div key={"symbols"} className="col ml-3">
                    <label className="col-form-label">Add Crypto</label>
                    <select placeholder="ALL" name={"symbols"} onChange={onSymbol} 
                    className="form-control">
                    {available_symbols.map(symbol=> <option key={symbol} 
                    value={symbol}>{symbol}</option>)}
                    <option key ={"ALL"}>ALL</option>
                    </select>
                </div>
            </div> 
                <div className="form-group row mt-2">
                    <div className="col">
                    <button type="submit" className="btn btn-primary form-control col">
                        Backtest</button>
                    </div>
                </div>
            </form>
            <div className="col">
                <h5>Included Crypto</h5>
                <ul>
                {symbols.map(symbol => <li className="list-group-item" 
                onClick={onDeleteSymbol} key={symbol} value={symbol} >{symbol}</li>)}
                </ul>
            </div>
            </div>
        </div>
    )
}

export default BackTestForm
