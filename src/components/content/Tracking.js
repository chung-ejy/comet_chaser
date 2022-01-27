import React from 'react';

const Tracking = () => {
    return (<div className='card'>
                <div className='card-body justify-content-left'>
                            <h1 className="card-title justify-content-center">
                                Tracking
                            </h1>
                        <p className="text-right">
                            Wow you deployed your first bot and its lit. First off you can switch between the test and live view to check the progress
                            of your test bot and your live bot. You have three views that you can check out. Iterations show's you the trade parameters
                            you defined and information on the different analysis runs your bot ran. Your bot will analyze the market every hour with 
                            the parameters you defined. Those analysis runs or iterations are logged and shown to you here. From there we have the order
                            view which shows you the last 10 trades your bot has run. Now the trades view is where you can track real progress. It shows 
                            you the gain that you made off of a buying and selling a cryptocurrency position. This mirrors the trades that you saw
                            in your backtests and is how you gauge whether your strategy is performing up to par.

                            AND THERE WE HAVE IT. Ya did it! You learned about technical crypto analysis, how to backtest a strategy, how to connect your
                            coinbase account, how to deploy a test and live bot, and how to keep track of it. You're now officially on your way to creating
                            the next skynet a deploying your own fleet of terminators to conquer the crypto market. Have a blast bruh...
                            </p>
                        <br></br>
            </div>
        </div>
    );
};

export default Tracking
