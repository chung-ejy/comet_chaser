import React from 'react';
import ApiKeyI from '../../assets/onboarding/api_key.PNG'
import ApiKeyII from '../../assets/onboarding/api_key_ii.PNG'
import ApiKeyIII from '../../assets/onboarding/api_key_iii.PNG'
import ApiKeyIV from '../../assets/onboarding/api_key_iv.PNG'
import ApiKeyV from '../../assets/onboarding/api_key_v.PNG'
import ApiKeyForm from '../../assets/onboarding/apikeyform.PNG'
const Connecting = () => {
    return (<div className='card'>
                <div className='card-body justify-content-left'>
                            <h1 className="card-title text-center">
                                Connecting Your Coinbase Account
                            </h1>
                        <div className="card">
                            <div className="row">
                            <p className="lead m-3  text-right">
                                1) Sign in to <a target="_blank" rel="noreferrer" href="https://pro.coinbase.com/">Coinbase Pro</a> or <a target="_blank" rel="noreferrer" href="https://public.sandbox.pro.coinbase.com/">Coinbase Pro Sandbox</a>. These two use the same account, but the sandbox account will
                                allow you to deploy a test bot, while the original Coinbase Pro will be linked to your live bot. I recommend starting
                                with a sandbox api key to test and checkout different strategies and when you're ready deploy your live bot. Do note that the
                                sandbox api will only allow you to trade Bitcoin.
                            </p>
                        </div>
                        </div>
                    <br></br> 
                        <div className="card">
                            <div className="row">
                            <div className="col-6">
                                <p className="lead m-3  text-center mt-3 mb-3">
                            2) Go to the API section of your account.
                            </p>
                            <img src={ApiKeyI} className="img-fluid mt-3 mb-3" alt="Responsive"></img>
                        </div>
                        <div className="col-6">
                            <p className="lead m-3  text-right row mt-3 mb-3">
                            3) Create a new API key
                            </p>
                            <img src={ApiKeyII} className="img-fluid row mt-3 mb-3" alt="Responsive"></img>
                            </div>
                        </div>
                        </div>
                    <br></br>  
                        <br></br>  
                        <div className="card">
                            <div className="row">
                            <div className="col-4">
                            <p className="lead m-3  text-right mt-3 mb-3">
                            4) Provide <strong className="text-secondary">view and trade</strong> permissions, keep the <strong className="text-secondary">ip whitelist to all</strong>, and save your <strong className="text-primary">passphrase</strong>
                            </p>
                            <img src={ApiKeyIII} className="img-fluid mt-3 mb-3" alt="Responsive"></img>
                            </div> 
                            <div className="col-4">
                        <p className="lead m-3  text-right mt-3 mb-3">
                        5) Create your key and save your <strong className="text-primary">secret</strong>.          
                            </p>
                            <img src={ApiKeyIV} className="img-fluid mt-3 mb-3" alt="Responsive"></img>
                            </div>
                            <div className="col-4">
                        <p className="lead m-3  text-right mt-3 mb-3">
                        6) Save your <strong className="text-primary">API key</strong>.
                            </p>
                            <img src={ApiKeyV} className="img-fluid mt-3 mb-3" alt="Responsive"></img>
                            </div>
                            </div>
                            </div>
                        <br></br>   
                        <div className="card">
                            <div className="row">       
                            <p className="lead m-3  text-right col-6 mt-3 mb-3">
                                7) Fill in the Coinbase Key Update Form in your profile page.
                                <h5>Note:</h5>
                                <ul className="list-unstyled">
                                <li>the <strong className="text-primary">apikey</strong> came from step 6</li>
                                <li>the <strong className="text-primary">secret</strong> came from step 5</li>
                                <li>the <strong className="text-primary">passphrase</strong> came from step 4</li>
                                </ul>
                                <p>Fill in the 
                                from values without sandbox in the beginning for the live keys and the values with sandbox for sandbox keys.</p>
                                </p> 
                            <img src={ApiKeyForm} className="img-fluid col-6 mt-3 mb-3" alt="Responsive"></img>
                            </div>
                            </div>
                        <p className='lead'>AND YOUR DONE! Now that all the hard work is done, lets deploy your first bot!</p>
                    <br></br>    
            </div>
        </div>
    );
};

export default Connecting
