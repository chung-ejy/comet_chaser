import React, { Fragment ,useState} from 'react'
import ReactDOM from 'react-dom'
import {Switch} from 'react-router'
import { HashRouter as Router, Route, Routes, Redirect} from 'react-router-dom'
import DataState from "./context/data/dataState"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Dashboard from "./components/pages/Dashboard"
import Landing from "./components/pages/Landing"
import Alert from './components/alerts/Alert'
import Backtest from './components/pages/Backtest'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

export const App = () => {
    return (
        <DataState>
            <Router>
            <Header />
            <div className="container-sm align-middle text-center">
                <Alert />
                <Routes>
                    <Route exact path ="/" element={<Landing />} />
                    <Route exact path ="/dashboard" element={<Dashboard />} />
                    <Route exact path="/register" element={<Register/>} /> 
                    <Route exact path="/login" element={<Login/>} /> 
                    <Route exact path="/backtest" element={<Backtest />} /> 
                </Routes>
            </div>
            </Router>
            <Footer />
        </DataState>
    )
}

export default App

