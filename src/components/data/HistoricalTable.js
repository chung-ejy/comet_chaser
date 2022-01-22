import React, { useContext,useState } from 'react'
import DataContext from '../../context/data/dataContext'

const HistoricalTable = () => {
    const dataContext = useContext(DataContext)
    const {historicals,loading} = dataContext
    return ( loading ? "" :
        <div className="card card-body mt-4 mb-4">
            <div className="card card-body mt-4 mb-4">
            <table className="table table-responsive-sm">
                <thead>
                <tr>
                        <th>date</th>
                        <th>currency</th>
                        <th>signal</th>
                        <th className="d-none d-lg-table-cell">velocity</th>
                        <th className="d-none d-lg-table-cell">inflection</th>
                        <th className="d-none d-lg-table-cell">sign_change</th>
                        <th className="d-none d-lg-table-cell">bid</th>
                        <th className="d-none d-lg-table-cell">ask</th>
                        <th className="d-none d-lg-table-cell">price</th>
                    </tr>
                </thead>
                <tbody>
                    {historicals.map(row => 
                        (<tr>
                        {Object.keys(row).map(key => ["time","crypto","signal"].includes(key) ? <td>{row[key]}</td> : <td className="d-none d-lg-table-cell">{row[key]}</td>)}
                        </tr>)
                    )}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default HistoricalTable
