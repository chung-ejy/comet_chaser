
import React from "react";
import ReactDOM from "react-dom"

import { useEffect, useContext } from "react";
import DataContext from "../../context/data/dataContext";
import {
    PayPalButtons
} from "@paypal/react-paypal-js";
import { GET_SUBSCRIPTION } from "../../context/data/types";

// This values are the props in the UI

const sub_id = "P-0SC60511TN410841SMH2VZGA"
const Paypal = () => {
  const dataContext = useContext(DataContext)
  const {getBacktest,available_symbols, createSubscription, subscription, user,loading, updateSubscription,getSubscription} = dataContext
  const {active,subscription_id} = subscription
  const onClick = (e) => {
    e.preventDefault()
    updateSubscription()
    getSubscription()
  }
    return (<div className="card card-body mt-4 mb-4">
            <h5>Subscription Form</h5>
            {active && subscription_id !== "" ? <button onClick={onClick} className={"btn btn-secondary"}>Cancel Subscription</button> :
            !active && subscription_id !== "" ? <button onClick={onClick} className={"btn btn-primary"}>Reactivate Subscription </button> 
            : <PayPalButtons
                createSubscription={(data, actions) => {
                  return actions.subscription.create({
                      'plan_id': process.env.SUBSCRIPTIONID.toString(),
                  })
              }}
                onApprove={(data, actions) => {
                  createSubscription({"subscription_id":data.subscriptionID})
                  }
                }
                onCancel={(data,actions) => {
                  getSubscription()
                }}

                onError={(data,actions) => {
                  getSubscription()                  
                }}
            />}
            </div>
)}

export default Paypal