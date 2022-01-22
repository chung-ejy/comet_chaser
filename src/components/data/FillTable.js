import React, { useContext,useState } from 'react'
import DataContext from '../../context/data/dataContext'

const FillTable = () => {
    const dataContext = useContext(DataContext)
    const {fills,loading} = dataContext
    return ( loading ? "" :
        <div className="card card-body mt-4 mb-4">
            <div className="card card-body mt-4 mb-4">
            <table className="table table-responsive-sm">

                <tbody>
                    {fills.map(row => 
                        (<tr>
                        {Object.keys(row).map(key => <td>{row[key]}</td>)}
                        </tr>)
                    )}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default FillTable
