
   
import React, { useState, Fragment, useContext } from 'react'
import DataContext from '../../context/data/dataContext'
const AnalysisResults = () => {
    const dataContext = useContext(DataContext)
    const {analysis,loading} = dataContext
    return (
        <div className="card card-body mt-4 mb-4">
             <h5>Backtest Results</h5>
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
                        {Object.keys(analysis).map(key => ([...Array(analysis.positions).keys()].map(pos => (pos)) + ["pv"]).includes(key) ?
                            <tr key={key}><td>{key}</td><td key={key}>{analysis[key]}</td></tr> : null)}
                </tbody>
            </table>
        {/* // </div> */}
        </div>
    )
}

export default AnalysisResults