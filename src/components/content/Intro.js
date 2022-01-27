import React from 'react';

const Intro = () => {
    return (<div className='card'>
                <div className='card-body justify-content-left'>
                            <h1 className="card-title justify-content-center">
                                Introduction
                            </h1>
                        <p className="lead text-right">
                            Wow, ya made it to onboarding! The following page will provide you information on CometChaser! Once you complete reading the
                            contents of this page, you will be able to:</p> 
                            <ol className="list-unstyled text-left">
                                <li><strong>Understand</strong> the research behind my functionality</li>
                               <li> <strong>Backtest</strong> a strategy with trade parameters YOU defined</li>
                               <li> <strong>Connect</strong> your coinbase pro account</li>
                               <li> <strong>Deploy</strong> both a test and live trading bot</li>
                               <li> <strong>Track</strong> your bot's progress! </li>
                            </ol>
                                <p className="lead text-right">
                            When you're ready to get started start by checking out
                            the background tab to learn more about how your bot works!</p>
                            
                        <br></br>
            </div>
        </div>
    );
};

export default Intro
