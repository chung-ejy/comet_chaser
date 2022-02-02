import React, { useContext } from 'react'
import DataContext from '../../context/data/dataContext'

const TradeParams = () => {
    const dataContext = useContext(DataContext)
    const {trade_params,loading, isAuth} = dataContext
    return ( loading || !isAuth ? "" :
        <div className="card card-body mt-4 mb-4">
             <h5>Trading Parameter</h5>
            <table className="table table-responsive-sm">
                <tbody> 
                    <tr>
                        <th>parameter</th>
                        <th>value</th>
                        {/* <th>trades</th>
                        <th>pv</th>
                        <th>days</th> */}
                        {/* <th className="d-none d-lg-table-cell" scope="col">retrack_days</th>
                        <th>value</th>
                        <th className="d-none d-lg-table-cell" scope="col">conservative</th>
                        <th className="d-none d-lg-table-cell" scope="col">entry_strategy</th>
                        <th className="d-none d-lg-table-cell" scope="col">exit_strategy</th>
                        <th className="d-none d-lg-table-cell" scope="col">positions</th> */}
                    </tr>
                        {Object.keys(trade_params).map(key => 
                            ["signal","req","value","retrack_days","value","conservative","exit_strategy","entry_strategy","positions"].includes(key) 
                            ? <tr key={key}><td>{key}</td><td key={key}>{trade_params[key]}</td></tr>
                            : null)}
                </tbody>
            </table>
        {/* // </div> */}
        </div>
    )
}

export default TradeParams
