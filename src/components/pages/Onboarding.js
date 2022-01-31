import React, { useState} from 'react';
import Backtesting from '../content/Backtesting';
import Connecting from '../content/Connecting';
import Deploying from '../content/Deploying';
import Tracking from '../content/Tracking';
import Background from '../content/Background';
import Intro from '../content/Intro';
const Onboarding = () => {
    const [state,setState] = useState("introduction")
    const pages = ["introduction"
    ,"background","backtesting"
    // ,"connecting","deploying","tracking"
]
    const onClick = (e) => {
        e.preventDefault()
        setState(e.target.name)
    }

    return (<div className='card mt-5'>
                <div className='card-body'>
                    <h1 className="card-title text-center">
                        Onboarding
                    </h1>
                    <div className="row">
                        <div className="col col-3">
                    <div className="list-group flex-column fixed-left">
                        {pages.map(page => 
                        <button type="button" className="list-group-item list-group-item-action" name={page} onClick={onClick} key={page}>
                        {page}
                        </button> 
                        )}
                    </div>
                    </div>
                    <div className="col col-9">
                        { 
                        state === "background" ? <Background /> :
                        state === "backtesting" ? <Backtesting /> :
                        state === "connecting" ? <Connecting /> :
                        state === "deploying" ? <Deploying /> :
                        state === "introduction" ? <Intro /> :
                        <Tracking /> 
                        }
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Onboarding
