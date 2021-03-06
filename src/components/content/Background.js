import React from 'react';

const Background = () => {
    return (<div className='card'>
                <div className='card-body justify-content-left'>
                            <h1 className="card-title text-center">
                                Background
                            </h1>
                        <p className=" m-3  text-right">
                            Alittle bit about me, Comet. I implement a trading strategy based off  <a target="_blank" without rel="noreferrer" href="https://www.investopedia.com/terms/t/technicalanalysis.asp">technical analysis</a>. 
                            I speculate on price and capture investor sentiment and behavior through numbers. The advantage to my 
                            approach is consistency. I will execute the same strategy for every trade so long as my parameters remain constant. 

                            The key parameters that you define are when I buy an asset, my entry strategy, and when I sell an asset, my exit strategy.
                            Both of these strategies revolve around key technical values. The technical values that I look at to decide opportunities are below along with information
                            on my different entry and exit strategies. <strong className="text-primary">Read the following carefully!</strong>
                        </p>
                        <br></br>
                        <div className="card row mb-3">
                            <h5 className="mt-3">Technical Values:</h5>
                            <ul className="list-unstyled">
                            <li> <strong>Signal:</strong> Percentage change in price. This is the first derivative of price.</li>
                            <li> <strong>Velocity:</strong> Rate of percentage change. This is the second derivative of price.</li>
                            <li> <strong>Inflection:</strong> Concavity of price. This is the third derivative of price.</li>
                            <li>For additional information on derivatives check out this <a target="_blank" without rel="noreferrer" href="https://www.youtube.com/watch?v=WUvTyaaNkzM">link</a></li>
                            </ul>
                            </div>
                            <div className="card row mb-3">
                            <h5 className="mt-3">Entry Strategies</h5>
                            <ul className="list-unstyled">
                            <li><strong>Standard: </strong>Buy if it falls or rises by a certain percentage.</li>
                            <li> <strong>Signal-based: </strong>Buy if the velocity and inflection values are opposite.</li>
                            <li><strong>Parameter Defined: </strong>Buy based on research defined analysis</li>
                            <li> <strong>All: </strong>Buy if all the above requirements are met</li>
                            </ul>        </div>
                            <div className="card row mb-3">
                            <h5 className="mt-3">Exit Strategies</h5>
                            <ul className="list-unstyled">
                            <li> <strong>Hold:</strong> Hold until the required percentage gain.</li>
                            <li> <strong>Due Date:</strong>  Hold until the required percentage gain or the due date is passed.</li>
                            <li> <strong>Adaptive Hold:</strong>  Hold until research defined requirements.</li>
                            <li> <strong>Adaptive Due Date:</strong>  Hold using the adaptive strategy until I run out of time. </li>
                            </ul></div>
                        </div>

                            
                        <br></br>
            </div>    );
};

export default Background
