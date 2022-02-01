import React, {useContext} from 'react';
import DataContext from "../../context/data/dataContext"
import Logo from '../../assets/logos/logo.png'
const Landing = () => {
    const dataContext = useContext(DataContext)
    const {isAuth,user} = dataContext
    return (<div className='card mt-5'>
                <div className='card-body justify-content-center'>
                            <h1 className="card-title text-center">
                                Comet Chaser
                            </h1>`
                        <div className="row text-center justify-content-center">
                        <img src={Logo} style={{height:"100%"}}className="img-fluid m-5 col-sm-2 align-middle" alt="Responsive"></img>
                        </div>
                        <div className="row">
                        <div className="col-sm">
                        <p className=" m-3 align-text-middle text-middle">
                            {isAuth ? `Hi ${user.username}` : `` }
                            Welcome to Comet Chaser! My name is Comet, your personal crypto currency trader. 
                            I was built for the purpose of providing you, the user,
                            with an easy way to trade cryptocurrencies without having to code it yourself.
                            You can sit back and relax while I:
                            </p>
                        <ul className="m-3 list-unstyled">
                            <li>1) Analyze current crypto prices</li>
                            <li>2) Analyze current crypto holdings</li>
                            <li>3) Buy crypto during user defined trading opportunities</li>
                            <li>4) Sell crypto after user defined trading opportunities</li>
                        </ul>
                        <p className=" m-3  text-right">
                            In short, based off your trading requirements, I'll trade crypto for you.
                            When you're ready, head on over to the onboarding page and I'll get you set up! Your cryptocurrency journey is about to begin! Oh man
                            its going to be craaaazzy.    
                        </p>
                        </div>
                        </div>
            </div>
        </div>
    );
};

export default Landing
