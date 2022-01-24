import React, { useContext,useState } from 'react'
import DataContext from '../../context/data/dataContext'

const IterationTable = () => {
    const dataContext = useContext(DataContext)
    const {iterations,loading} = dataContext
    return ( loading ? "" :
        <div className="card card-body mt-4 mb-4">
            <div className="card card-body mt-4 mb-4">
            <table className="table table-sm">
                    <thead>
                    <tr>
                        <th scope="col">time</th>
                        <th className="col d-none d-lg-table-cell" scope="col">retrack_days</th>
                        <th scope="col">req</th>
                        <th scope="col">signal</th>
                        <th className="d-none d-lg-table-cell" scope="col">value</th>
                        <th className="d-none d-lg-table-cell" scope="col">conservative</th>
                        <th className="d-none d-lg-table-cell" scope="col">entry</th>
                        <th className="d-none d-lg-table-cell" scope="col">exit</th>
                        {/* <th>fee</th>
                        <th>minimum_rows</th>
                        <th>live</th> */}
                        <th scope="col" className="d-none d-lg-table-cell">sleep_time</th>
                        <th scope="col" className="d-none d-lg-table-cell">status</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    {iterations.size > 0 ? iterations.map(row => 
                        (<tr>
                        {Object.keys(row).map(key => ["retrack_days","value","conservative","entry_strategy","exit_strategy","sleep_time","status"].includes(key) ? <td className="d-none d-lg-table-cell">{row[key]}</td> : <td>{row[key]}</td>)}
                        </tr>)
                    ): <tr></tr>}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default IterationTable
