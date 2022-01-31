import React from 'react';
import ProfilePage from '../../assets/onboarding/profile.PNG'
const Deploying = () => {
    return (<div className='card'>
                <div className='card-body justify-content-left'>
                            <h1 className="card-title text-center">
                                Deploying
                            </h1>
                        <p className="lead m-3  text-right">
                            Now head on over to the profile tab to check out your profile!
                        </p>    
                        <h5 className="m-3">Available Actions:</h5>
                        <ul className="m-3 list-unstyled">
                            <li><strong>Add and Update</strong> your api keys by utilizing the apikey form</li>
                            <li><strong>Subscribe</strong> and begin deploying a live bot and test bot!</li>
                        </ul>
                        {/* <img src={ProfilePage} className="img-fluid mt-3 mb-3" alt="Responsive"></img> */}
                        <p className="lead m-3 ">
                            You will see the apikey update form to add your keys and a subscription form to subscribe and deploy your bot.
                        </p>
                        <p className="lead m-3 ">
                            Lets head on over to tracking to see how to track your bot's progress.
                        </p>
                        <br></br>
            </div>
        </div>
    );
};

export default Deploying
