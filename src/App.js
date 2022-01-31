import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DataState from "./context/data/dataState"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Dashboard from "./components/pages/Dashboard"
import Landing from "./components/pages/Landing"
import Backtest from './components/pages/Backtest'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Profile from './components/pages/Profile'
import Onboarding from './components/pages/Onboarding'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
export const App = () => {
        return (
        <DataState>
        <PayPalScriptProvider options={{ "vault":"true"
                                    ,"intent":"subscription"
                                    ,"client-id": process.env.REACT_APP_PAYPALCLIENTID}}>
            <Router>
            <Header />
            <div className="container-sm align-middle mb-5">
                <Routes>
                    <Route exact path ="/" element={<Landing />} />
                    <Route exact path ="/profile" element={<Profile />} />
                    <Route exact path ="/tracking" element={<Dashboard />} />
                    <Route exact path ="/onboarding" element={<Onboarding />} />
                    <Route exact path="/register" element={<Register/>} /> 
                    <Route exact path="/login" element={<Login/>} /> 
                    <Route exact path="/backtest" element={<Backtest />} /> 
                </Routes>
            </div>
            </Router>
            <Footer />
            </PayPalScriptProvider>
        </DataState>
    )
}

export default App

