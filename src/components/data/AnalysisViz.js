
   
import React, { useState, Fragment, useContext } from 'react'
import DataContext from '../../context/data/dataContext'
import { VictoryLine, VictoryChart,VictoryZoomContainer } from 'victory'
const AnalysisViz = () => {
    const dataContext = useContext(DataContext)
    const {analysis,loading} = dataContext
    const [state,setState] = useState({"zoomDomain":{"x":[new Date(2021,1,1),Date.now()]}})
    const handleZoom = (domain) => {
        setState({...state,["zoomDomain"]:domain})
    }
    return (
        <div className="card card-body mt-4 mb-4">
            {analysis.length < 1 ? <div></div> :
            <Fragment>
            <h5 className="card-title text-center mb-1">
            Performance
            </h5>

            <VictoryChart
                containerComponent={<VictoryZoomContainer
                    zoomDimension="x"
                    zoomDomain={state.zoomDomain}
                    onZoomDomainChange={handleZoom.bind(this)}
                    />
                }
                >
                <VictoryLine
                    style={{
                    data: { stroke: "navy",
                            strokeWidth: 1 },
                    parent: { border: "1px solid #ccc"}
                    }}
                    data={analysis}
                    y="actual_delta"
                    x="date"
                    sample={analysis.size}
                    scale={{"x":"time","y":"linear"}}
                />
                {/* <VictoryLine
                    style={{
                    data: { stroke: "navy   " },
                    parent: { border: "1px solid #ccc"}
                    }}
                    // samples={50}
                    data={data}
                    y="rolling"
                    x="date"
                    scale={{"x":"time","y":"linear"}}
                    
                /> */}
                </VictoryChart>
                {/* <div className="row"><div className="col" style={{color:"maroon"}}>Rolling</div><div style={{color:"navy"}}>Adj Close</div></div> */}
                {/* <table className="table table-responsive-sm">
                    <tbody>
                    {["Symbol"
                    ,"Security"
                    ,"GICS Sector"
                ].map(
                        column => (
                        <tr>
                            <td>{column}</td>
                            <td>{sectors.filter(s => s["Symbol"] == data[0]["ticker"])[0][column]}</td>
                        </tr>
                        )
                    )}

                    <tr>
                        <td style={{color:"navy"}}>{"rolling"}</td>
                        <td style={{color:"navy"}}>{timeseries.filter(ts => ts["ticker"]==data[0]["ticker"])[0]["rolling"]}</td>
                    </tr>
                    <tr>
                        <td style={{color:"maroon"}}>{"adjClose"}</td>
                        <td style={{color:"maroon"}}>{timeseries.filter(ts => ts["ticker"]==data[0]["ticker"])[0]["adjClose"]}</td>
                    </tr>
                    <tr>
                        <td style={{color:`${timeseries.filter(ts => ts["ticker"]==data[0]["ticker"])[0]["gain"] > 0 ? "green" : "red"}`}}>{"gain"}</td>
                        <td style={{color:`${timeseries.filter(ts => ts["ticker"]==data[0]["ticker"])[0]["gain"] > 0 ? "green" : "red"}`}}>{timeseries.filter(ts => ts["ticker"]==data[0]["ticker"])[0]["gain"]}</td>
                    </tr>
                    </tbody>
                </table> */}
                </Fragment>
            }
        </div>
    )
}

export default AnalysisViz