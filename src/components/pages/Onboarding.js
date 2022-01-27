import React, { useState} from 'react';
import Backtesting from '../content/Backtesting';
import Connecting from '../content/Connecting';
import Deploying from '../content/Deploying';
import Tracking from '../content/Tracking';
import Background from '../content/Background';
import Intro from '../content/Intro';
import Logo from '../../assets/logos/logo.png'
const Onboarding = () => {
    const [state,setState] = useState("introduction")
    const pages = ["introduction","background","backtesting","connecting","deploying","tracking"]
    const onClick = (e) => {
        setState(e.target.name)
    }

    return (<div className='card mt-5'>
                <div className='card-body'>
                    <h1 className="card-title text-center">
                        Onboarding
                    </h1>
                    <div className="row">
                        <div className="col col-1">
                        {/* <img src={Logo} style={{width:"100%"}}className="img-fluid col-sm-2 align-middle" alt="Responsive image"></img> */}
                    <ul className="nav nav-pills flex-column nav-fill fixed-left">
                        {pages.map(page => 
                        <a class="list-group-item list-group-item-action" name={page} onClick={onClick} key={page}className="nav-item">
                        {page}
                        </a> 
                        )}
                    </ul>
                    </div>
                    <div className="col col-11">
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
