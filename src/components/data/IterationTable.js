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
                        <th scope="col">signal</th>
                        <th scope="col">req</th>
                        <th className="col d-none d-lg-table-cell" scope="col">retrack_days</th>
                        <th className="d-none d-lg-table-cell" scope="col">value</th>
                        <th className="d-none d-lg-table-cell" scope="col">conservative</th>
                        <th className="d-none d-lg-table-cell" scope="col">entry</th>
                        <th className="d-none d-lg-table-cell" scope="col">exit</th>
                        <th scope="col" className="d-none d-lg-table-cell">positions</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                   {iterations.map(row => 
                        (<tr key={row["date"]}>
                        {Object.keys(row).map(key => ["date","signal",	"req",	"retrack_days",	"value"
                                        ,"conservative"	,"entry_strategy",	"exit_strategy",	
                                        "positions"].includes(key) 
                        ? <td key={key} className="d-none d-lg-table-cell">
                            {row[key]}</td> : null)}
                        </tr>))
                    }
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default IterationTable
