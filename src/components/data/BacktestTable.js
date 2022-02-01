import React, { useContext } from 'react'
import DataContext from '../../context/data/dataContext'

const BacktestTable = () => {
    const dataContext = useContext(DataContext)
    const {backtest,loading} = dataContext
    const included_columns = ["date","crypto","sell_date","buy_price","sell_price","delta"]
    return ( loading ? "" :
        <div className="card card-body mt-4 mb-4">
            <div className="card card-body mt-4 mb-4">
            <table className="table table-responsive-sm">
            <thead>
                    <tr>
                        {included_columns.map(col => ["date","crypto","delta"].includes(col) ? <th key={col}>{col}</th> : <th className={"d-none d-lg-table-cell"} key={col}>{col}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    {backtest.map(row => 
                        (<tr key={row["date"]}>
                        {included_columns.map(key => ["buy_price","sell_price","delta"].includes(key) 
                        ? key=="delta" ? <td key={key}>{row[key].toFixed(2)}</td> : <td className={"d-none d-lg-table-cell"} key={key}>{row[key].toFixed(2)}</td>
                        : ["date","crypto","delta"].includes(key) ? <td key={key}>{row[key]}</td> : <td className={"d-none d-lg-table-cell"} key={key}>{row[key]}</td>)}
                        </tr>)
                    )}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default BacktestTable
