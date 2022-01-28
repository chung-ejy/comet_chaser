
   
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
            {analysis.length < 1 || loading? <div></div> :
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
                </VictoryChart>
                </Fragment>
            }
        </div>
    )
}

export default AnalysisViz