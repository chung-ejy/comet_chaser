import React, { useState} from 'react';
import Backtesting from '../content/Backtesting';
import Connecting from '../content/Connecting';
import Deploying from '../content/Deploying';
import Tracking from '../content/Tracking';
import Background from '../content/Background';
import Intro from '../content/Intro';

const Onboarding = () => {
    const [state,setState] = useState("introduction")
    const pages = ["introduction","background","backtesting","connecting","deploying","tracking"]
    const onClick = (e) => {
        setState(e.target.name)
    }

    return (<div className='card'>
                <div className='card-body'>
                    <h1 className="card-title justify-content-center">
                        Onboarding
                    </h1>
                    <div className="row">
                        <div className="col col-3">
                    <ul className="nav nav-pills flex-column nav-fill">
                        {pages.map(page => 
                        <a class="list-group-item list-group-item-action" name={page} onClick={onClick} key={page}className="nav-item">
                        {page}
                        </a> 
                        )}
                    </ul>
                    </div>
                    <div className="col col-7">
                        { state === "connect" ? <Connecting /> :
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
