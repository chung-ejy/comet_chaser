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
                            <h1 className="card-title justify-content-center">
                                Connecting Your Coinbase Account
                            </h1>
                        <p className="text-right">
                            1) Sign in to Coinbase Pro or Sandbox Coinbase Pro. These two use the same account, but the sandbox account will
                            allow you to deploy a test bot, while the original Coinbase Pro will be linked to your live bot. I recommend starting
                            with a sandbox api key to test and checkout different strategies and when you're ready deploy your live bot. Do note that the
                            sandbox api will only allow you to trade Bitcoin.

                            <a href="https://public.sandbox.pro.coinbase.com/">Coinbase Pro Sandbox link</a>
                            <a href="https://pro.coinbase.com/">Coinbase Pro link</a>
                        </p>
                        <br></br> 
                        <p className="text-right">
                            2) Go to the API section of your Coinbase Pro Account
                            <img src={ApiKeyI} class="img-fluid" alt="Responsive image"></img>
                            </p>
                        <br></br>  
                        <p className="text-right">
                            3) Create a new API key
                            <img src={ApiKeyII} class="img-fluid" alt="Responsive image"></img>
                            </p>
                        <br></br>  
                        <p className="text-right">
                            4) Make sure you provide view and trade permissions, keep the ip whitelist to all, and copy your passphrase somewhere safe
                            <img src={ApiKeyIII} class="img-fluid" alt="Responsive image"></img>
                            </p>
                        <br></br>  
                        <p className="text-right">
                            5) Create your key and save your API secret.
                            <img src={ApiKeyIV} class="img-fluid" alt="Responsive image"></img>
                            </p>
                        <br></br>  
                        <p className="text-right">
                            6) Save your API key.
                            <img src={ApiKeyV} class="img-fluid" alt="Responsive image"></img>
                            </p>
                        <br></br>          
                        <p className="text-right">
                            6) Fill in the Key Form in your profile page.
                            <img src={ApiKeyForm} class="img-fluid" alt="Responsive image"></img>
                            </p>
                        <p>AND YOUR DONE! Now that all the hard work is done, lets deploy your first bot!</p>
                        <br></br>    
            </div>
        </div>
    );
};

export default Connecting
