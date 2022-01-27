import React from 'react';

const Deploying = () => {
    return (<div className='card'>
                <div className='card-body justify-content-left'>
                            <h1 className="card-title justify-content-center">
                                Deploying
                            </h1>
                        <p className="lead text-right">
                            Now head on over to the profile tab. You will see your current trade parameters, a form to update your parameters, and the apikey update form.
                            If you ever want to change your api keys utilize the apikey form to update them! If you ever want to change your trade parameters, use 
                            the trade parameter form to update them. When you started your account, we provided research based parameters that have performed well 
                            last year. If you're happy with the given parameters keep them as is and CLICK THE TURN ON BUTTON! WOW HERE WE GO! You can always
                            shutdown your bot through this page by clicking the shutdown button. You'll notice the status of your bot at the top. Also you can deploy
                            a test bot by switching to the test bot view. Once you've provided us with the trade parameters you want to use and clicked turn on. Your bot
                            is now live and is beginning to analyze the cryptocurrency market. Lets head on over to tracking to see how to track your bot's progress.
                            </p>
                        <br></br>
            </div>
        </div>
    );
};

export default Deploying
