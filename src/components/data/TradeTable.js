import React, { useContext } from 'react'
import DataContext from '../../context/data/dataContext'

const TradeTable = () => {
    const dataContext = useContext(DataContext)
    const {trades,loading} = dataContext
    return ( loading ? "" :
        <div className="card card-body mt-4 mb-4">
            <div className="card card-body mt-4 mb-4">
            <table className="table table-responsive-sm">

                <tbody>
                    <tr>
                        <th>date</th>
                        <th>currency</th>
                        {/* <th>order_id</th> */}
                        <th>status</th>
                        <th className="d-none d-lg-table-cell">sell_price</th>
                        <th className="d-none d-lg-table-cell">size</th>
                        <th className="d-none d-lg-table-cell">buy_price</th>
                    </tr>
                    {trades.map(row => 
                        (<tr key={row["date"] + row["status"]}>
                        {Object.keys(row).map(key => ["date","product_id","status"].includes(key) ? 
                                    <td key={key}>{row[key]}</td> :
                                    <td key={key} className="d-none d-lg-table-cell">{row[key]}</td> )}
                        </tr>)
                    )}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default TradeTable
