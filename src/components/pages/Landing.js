import React, {useContext} from 'react';
import DataContext from "../../context/data/dataContext"

const Landing = () => {
    const dataContext = useContext(DataContext)
    const {isAuth,user} = dataContext
    return (<div className='card text-center'>
                <div className='card-body'>
                            <h1 className="card-title justify-content-center">
                                CometChaser
                            </h1>
                        <p>
                            Welcome to CometChaser! My name is Comet, your personal crypto currency trader. I'm built off of python and currently
                            leverage the Coinbase Exchange api to execute your automated trades. I was built for the purpose of providing you, the user,
                            with an easy way to invest and trade in crypto currencies without the day to day research required to manage a crypto account.
                            You can sit back and relax while I:

                            1) Analyze current crypto prices
                            2) Analyze current crypto holdings
                            3) Buy crypto during user defined trading opportunities
                            4) Sell crypto after user defined trading opportunities

                            In short, based off what your trade requirements are, I'll trade crypto for you. Here is a list of parameters you the user 
                            can define for me to follow:

                            1) How long do you want to look back in time to calculate whether a crypto is a good buy?
                            2) What percentage change in price, either negative or positive, should be taken into consideration when buying crypto?
                            3) Do you want to buy when crypto prices are high or low?
                            4) Do you want to be conservative on how you choose your crypto opportunities?
                            5) How many cryptocurrencies do you want to hold at one time?
                            6) What kind of entry strategy do you want to use?
                            7) What kind of exit strategy do you want to use?
                            8) Are there any cryptocurrencies you're interested in trading?

                            This may all seem a little overwhelming, so take a breather and check out our free to use backtesting service. You can begin your 
                            own bot deployment journy by seeing strategies and parameters have done well in the past!

                            If you're ready to deploy your own bot, please reference our onboarding page on how to connect your Coinbase Pro account! Wowzers!
                            
                            {isAuth ? `Hi ${user.username}` : `` }
                        </p>
            </div>
        </div>
    );
};

export default Landing
