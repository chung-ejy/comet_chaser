import React, {useContext} from 'react';
import DataContext from "../../context/data/dataContext"

const Landing = () => {
    const dataContext = useContext(DataContext)
    const {isAuth,user} = dataContext
    return (<div className='card'>
                <div className='card-body justify-content-left'>
                            <h1 className="card-title justify-content-center">
                                CometChaser
                            </h1>
                        <p className="text-right">
                            {isAuth ? `Hi ${user.username}` : `` }
                            Welcome to CometChaser! My name is Comet, your personal crypto currency trader. 
                            I'm built off of python and currently
                            leverage the Coinbase Exchange api to execute your automated trades.
                            </p>
                        <br></br>           
                        <p>I was built for the purpose of providing you, the user,
                            with an easy way to invest and trade in crypto currencies without the day to day research required to manage a crypto account.
                            You can sit back and relax while I:
                        </p>
                        <br></br>
                        <ul className="list-unstyled">
                            <li>1) Analyze current crypto prices</li>
                            <li>2) Analyze current crypto holdings</li>
                            <li>3) Buy crypto during user defined trading opportunities</li>
                            <li>4) Sell crypto after user defined trading opportunities</li>
                        </ul>
                        <br></br>
                        <p>
                            In short, based off what your trade requirements are, I'll trade crypto for you. Here is a list of parameters you the user 
                            can define for me to follow:
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
                            <li>whitelist_symbols: Are there any cryptocurrencies you're interested in trading?</li>
                        </ul>
                        <br></br>
                        <p>
                            If you're ready to deploy your own bot, please reference our onboarding page on how to connect your Coinbase Pro account! Wowzers!    
                        </p>
            </div>
        </div>
    );
};

export default Landing
