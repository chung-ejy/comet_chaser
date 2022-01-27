import React from 'react';

const Backtesting = () => {
    return (<div className='card'>
                <div className='card-body justify-content-left'>
                            <h1 className="card-title justify-content-center">
                                Backtesting
                            </h1>
                        <p className="text-right">
                            Anybody and everybody can backtest on Comet Chaser. You don't need an account to run a backtest. Some things to take into account 
                            while you use our backtesting service. 1) The data used for our backtest comes from Alphavantages cryptocurrency api. Check them out
                            here https://www.alphavantage.co/documentation/. 2) Refer to the following for parameter explanations:

                            </p>
                        <br></br>
                        <ul className="list-unstyled">
                            <li>retrack_days: How long do you want to look back in time to calculate whether a crypto is a good buy?</li>
                            <li>signal: What percentage change in price, either negative or positive, should be taken into consideration when buying crypto?</li>
                            <li>value: Do you want to buy when crypto prices are high or low?</li>
                            <li>conservative: Do you want to be conservative on how you choose your crypto opportunities?</li>
                            <li>positions: How many cryptocurrencies do you want to hold at one time?</li>
                            <li>entry strategy: What kind of entry strategy do you want to use?</li>
                            <li>exit_strategy: What kind of exit strategy do you want to use?</li>
                            <li>whitelist_symbols: Are there any cryptocurrencies you're interested in trading? If not, keep this as ALL and I will
                                check all the available cryptocurrencies available to trade on coinbase.
                            </li>
                        </ul>
                        <p>
                            Moving on, once your ready head on over to the backtesting page, input the parameters you want to backtest and run your backtest!
                            I will then implement the given strategy over last years crypto prices and output a list of trades that I executed. Feel free
                            to analyze said trades and see whether or not your happy with the results. If not, try tweaking your parameters and try again!
                            Once you're satisfied with a given parameter, head on over to connecting to get started on connecting your 
                            coinbase pro account.
                        </p>
                        <br></br>

            </div>
        </div>
    );
};

export default Backtesting
