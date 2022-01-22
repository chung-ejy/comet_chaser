import React, { Fragment ,useState} from 'react'
import ReactDOM from 'react-dom'
import DataState from "./context/data/dataState"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Data from "./components/pages/Data"
import Alert from './components/alerts/Alert'
import Backtest from './components/pages/Backtest'
export const App = () => {
    const [state,setState] = useState({"view":"dashboard"})
    const {view } = state

    const onView = () => {
        if (view == "dashboard") {
            setState({"view":"backtest"})
        } else {
            setState({"view":"dashboard"})
        }
    }
    return (
        <DataState>
            <Header />
            <div className="container-sm align-middle text-center">
                <Alert />
                <button type="button" onClick={onView} class="btn btn-primary m-2">{view}</button>
                {view =="dashboard" ? <Data /> : <Backtest />}
            </div>
            <Footer />
        </DataState>
    )
}

export default App

