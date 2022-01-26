import React, { useContext,useState } from 'react'
import DataContext from '../../context/data/dataContext'

const OrderTable = () => {
    const dataContext = useContext(DataContext)
    const {orders,loading} = dataContext
    return ( loading ? "" :
        <div className="card card-body mt-4 mb-4">
            <div className="card card-body mt-4 mb-4">
            <table className="table table-responsive-sm">

                <tbody>
                    <tr>
                        <th>currency</th>
                        {/* <th>order_id</th> */}
                        <th>status</th>
                        <th>side</th>
                        <th className="d-none d-lg-table-cell">time</th>
                        <th className="d-none d-lg-table-cell">price</th>
                        <th className="d-none d-lg-table-cell">size</th>
                    </tr>
                    {orders.map(row => 
                        (<tr key={row["created_at"]}>
                        {Object.keys(row).map(key => ["product_id","status","side"].includes(key) 
                        ? <td key={key}>{row[key]}</td> : 
                        <td key={key} className="d-none d-lg-table-cell">{row[key]}</td>)}
                        </tr>)
                    )}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default OrderTable
