import React, { useContext,useState } from 'react'
import DataContext from '../../context/data/dataContext'

const ErrorTable = () => {
    const dataContext = useContext(DataContext)
    const {cloud_errors,loading} = dataContext
    return ( loading ? "" :
        <div className="card card-body mt-4 mb-4">
            <div className="card card-body mt-4 mb-4">
            <table className="table table-responsive-sm">

                <tbody>
                    <tr>
                        <th>date</th>
                        <th>status</th>
                        <th className="d-none d-lg-table-cell">message</th>
                    </tr>
                    {cloud_errors.map(row => 
                        (<tr>
                        {Object.keys(row).map(key => key=="message" ? <td className="d-none d-lg-table-cell">{row[key]}</td>:<td>{row[key]}</td>)}
                        </tr>)
                    )}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default ErrorTable
