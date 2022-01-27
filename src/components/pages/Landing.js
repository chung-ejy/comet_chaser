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
                        <p className="lead text-right">
                            {isAuth ? `Hi ${user.username}` : `` }
                            Welcome to CometChaser! My name is Comet, your personal crypto currency trader. 
                            I'm built off of python and currently
                            leverage the Coinbase Exchange api to execute your automated trades.
                            </p>
                        <br></br>           
                        <p className="lead text-right">I was built for the purpose of providing you, the user,
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
                        <p className="lead text-right">
                            In short, based off what your trade requirements are, I'll trade crypto for you.
                            When you're ready, head on over to the onboarding page and I'll get you set up! Your cryptocurrency journey is about to begin! Oh man
                            its going to be craaaazzy.    
                        </p>
            </div>
        </div>
    );
};

export default Landing
