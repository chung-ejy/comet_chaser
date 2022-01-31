import React from 'react';
import Iterations from '../../assets/onboarding/iterations.PNG'
import Orders from '../../assets/onboarding/orders.PNG'
import Trades from '../../assets/onboarding/trades.PNG'
const Tracking = () => {
    return (<div className='card'>
                <div className='card-body justify-content-left'>
                            <h1 className="card-title text-center">
                                Tracking
                            </h1>
                        <p className="lead m-3 ">
                            This is your dashboard to track your bots and see information
                            pertaining to your parameters.
                            <li><strong>Notice</strong> the status of your bot in the header</li>
                            <li><strong>Toggle</strong> between the comet test bot and the comet live bot by clicking on the header</li>
                            <li><strong>Edit</strong> your trade parameters. Note, when you registered, I provided you with default parameters that include
                            a standard entry, hold exit, 5 percent signals and requirements, a retrack period of 7 days and only include BTC and ETH analysis</li>
                            <li><strong>Click</strong> on deploy or shutdown to start or stop your bot.</li>
                            Along with your bot status and parameters, you have three views that you can check out. 
                         </p>
                         <div className="card m-3">
                         <div className="row m-3"><h3>Iterations View</h3></div>
                             <div className="row">
                            <p className="lead m-3 col-sm-5">
                            The iterations view shows you information each analysis iteration your bot ran. Your bot will analyze the market every couple minutes with 
                            the parameters you defined. Those analysis runs or iterations are logged and displayed here. 
                            </p>
                            <img src={Iterations} className="img-fluid mt-3 mb-3 col-sm-6" alt="Responsive"></img>
                            </div>
                            </div>
                            <div className="card m-3">
                            <div className="row m-3"><h3>Orders View</h3></div>
                            <div className="row">
                            <p className="lead m-3 col-sm-5">
                            From there we have the order
                            view which shows you the last 10 trades your bot has run. The status of your orders are either pending or completed. Certain positions
                            may take time to fill depending on market conditions. Note, all buy orders will cancel at the end of the day if not filled. All sell
                            orders will be canceled depending on whether your exit strategy has a due date or not.
                            </p>
                            <img src={Orders} className="img-fluid mt-3 mb-3 col-sm-6" alt="Responsive"></img>
                            </div>
                            </div>
                            <div className="card m-3">
                            <div className="row m-3"><h3>Trades View</h3></div>
                            <div className="row">
                            <p className="lead m-3 col-sm-5">
                            Now the trades view is where you can track real progress. It shows 
                            you the gain that you made off of buying and selling a cryptocurrency position. This mirrors the trades that you saw
                            in your backtests and is how you gauge whether your strategy is performing up to par.</p>
                            <img src={Trades} className="img-fluid mt-3 mb-3 col-sm-6" alt="Responsive"></img>
                            </div>
                            </div>
                            <p className="lead m-3 ">
                            AND THERE WE HAVE IT! Ya did it! You learned about technical crypto analysis, how to backtest a strategy, how to connect your
                            coinbase account, how to deploy a test and live bot, and how to keep track of it. You're now officially a bot manager! Have a blast bruh...
                            </p>

                        <br></br>
            </div>
        </div>
    );
};

export default Tracking
