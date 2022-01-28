import React from 'react';

const Backtesting = () => {
    return (<div className='card'>
                <div className='card-body justify-content-left'>
                            <h1 className="card-title text-center">
                                Backtesting
                            </h1>
                            <div className="card m-3">
                        <p className="lead text-right m-3">
                            Anybody and everybody can backtest on Comet Chaser. You don't need an account to run a backtest! Some things to take into account 
                            while you use our backtesting service.</p>
                            </div>
                            <div className="card m-3">
                            <h5 className="m-3">Notes:</h5>
                            <ul className="m-3 list-unstyled">
                           <li>The data used for our backtest comes from  <a target="_blank" rel="noreferrer" href="https://www.alphavantage.co/documentation/">AlphaVantage's</a> cryptocurrency api.</li>
                           <li>Data provided by AlphaVantage are for educational purposes. Use at your own risk.</li>
                           <li>DISCLAIMER: Backtest performance does not reflect future performance</li>
                            </ul>
                            </div>

                        <br></br>
                        <div className="row"></div>
                        <div className="card m-3">
                        <h5 className="m-3">Parameter Definitions:</h5>
                        <p className="m-3">The following are the parameters used to run a backtest and a trade strategy. <strong>Read carefully!</strong></p>
                        <ul className="m-3 list-unstyled">
                            <li><strong>retrack_days:</strong> How long do you want to look back in time to calculate whether a crypto is a good buy?</li>
                            <li><strong>signal:</strong> What percentage change in price, either negative or positive, should be taken into consideration when buying crypto?</li>
                            <li><strong>req:</strong> How much percentage gain do you want to make per trade?</li>
                            <li><strong>value:</strong> Do you want to buy when crypto prices are high or low?</li>
                            <li><strong>conservative:</strong> Do you want to be conservative on how you choose your crypto opportunities?</li>
                            <li><strong>positions:</strong> How many cryptocurrencies do you want to hold at one time?</li>
                            <li><strong>entry strategy:</strong> What kind of entry strategy do you want to use?</li>
                            <li><strong>exit_strategy:</strong> What kind of exit strategy do you want to use?</li>
                            {/* <li><strong>whitelist_symbols:</strong> Are there any cryptocurrencies you're interested in trading? If not, keep this as ALL.</li> */}
                        </ul>
                        </div>
                        <div className="card m-3">
                        <h5 className="m-3">DISCLAIMER:</h5>
                        <p className="lead m-3">HISTORICAL PERFORMANCE IS NOT AN INDICATOR OF FUTURE PERFORMANCE! -MR.PORTER 2017- Although certain strategies and 
                            parameters performed well in the past it does not necessarily mean your bot will perform equally in the future. With that being said,
                            if you're choosing to invest in the crypto market, you believe that blockchain and the underlying technologies of these cryptocurrencies
                            are valuable. Investing and trading with a systematic approach has shown to be successful in multiple financial asset classes. So 
                            find confidence in knowing that quantitative analysis is a proven strategy that will perform well if approached with a level head 
                            and a consistent approach.
                        </p>
                        </div>
                        <div className="card m-3">
                        <p className="lead m-3">
                            Moving forward, once your ready head on over to the backtesting page, input the parameters you want to backtest and run your backtest!
                            I will then implement the given strategy over last years crypto prices and output a list of trades that I executed. Feel free
                            to analyze said trades and see whether or not your happy with the results. If not, try tweaking your parameters and try again! Have fun!
                        </p>
                        </div>

            </div>
        </div>
    );
};

export default Backtesting
