import React from 'react';

const Intro = () => {
    return (<div className='card'>
                <div className='card-body justify-content-left'>
                            <h1 className="card-title justify-content-center">
                                Introduction
                            </h1>
                        <p className="text-right">
                            Wow, ya made it to onboarding! The following page will provide you information on CometChaser! Once you complete reading the
                            contents of this page, you will be able to understand the research behind my functionality, how to backtest a strategy with 
                            trade paraemters YOU defined. How to connect your coinbase pro account to my brain, how to deploy both a test and
                            live trading bot and finally how to track your bot's progress! When you're ready to get started start by checking out
                            the background tab to learn more about how your bot works!
                            </p>
                        <br></br>
            </div>
        </div>
    );
};

export default Intro
