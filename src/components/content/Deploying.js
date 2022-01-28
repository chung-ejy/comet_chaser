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
                            <li><strong>Notice</strong> the status of your bot in the header</li>
                            <li><strong>Toggle</strong> between the comet test bot and the comet live bot by clicking on the header</li>
                            <li><strong>Add and Update</strong> your api keys by utilizing the apikey form</li>
                            <li><strong>Deploy or Shutdown</strong> your bots by clicking on the deploy/shutdown button</li>
                        </ul>
                        <img src={ProfilePage} className="img-fluid mt-3 mb-3" alt="Responsive"></img>
                        <p className="lead m-3 ">
                            You will see your current trade parameters, a form to update your parameters, and the apikey update form.
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
