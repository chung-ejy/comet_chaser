import React, { useContext,useState } from 'react'
import DataContext from '../../context/data/dataContext'

const TradeParams = () => {
    const dataContext = useContext(DataContext)
    const {trade_params,loading} = dataContext
    return ( loading ? "" :
        <div className="card card-body mt-4 mb-4">
            <div className="card card-body mt-4 mb-4">
            <table className="table table-responsive-sm">
                <tbody> 
                    <tr>
                        <th>signal</th>
                        <th>req</th>
                        {/* <th>trades</th>
                        <th>pv</th>
                        <th>days</th> */}
                        <th className="d-none d-lg-table-cell" scope="col">retrack_days</th>
                        <th>value</th>
                        <th className="d-none d-lg-table-cell" scope="col">conservative</th>
                        <th className="d-none d-lg-table-cell" scope="col">entry_strategy</th>
                        <th className="d-none d-lg-table-cell" scope="col">exit_strategy</th>
                        <th className="d-none d-lg-table-cell" scope="col">sleep_time</th>
                        <th className="d-none d-lg-table-cell" scope="col">positions</th>
                    </tr>
                    <tr>
                        {Object.keys(trade_params).map(key => ["signal","req","value"].includes(key) ? <td>{trade_params[key]}</td> : <td className="d-none d-lg-table-cell">{trade_params[key]}</td> )}
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default TradeParams
