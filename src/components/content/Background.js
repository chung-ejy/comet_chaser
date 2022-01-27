import React from 'react';

const Background = () => {
    return (<div className='card'>
                <div className='card-body justify-content-left'>
                            <h1 className="card-title justify-content-center">
                                Background
                            </h1>
                        <p className="text-right">
                            Alittle bit about me, COMET. I implement a trading strategy based off historical trends and quantitative analysis. In the finance world,
                            we call this form of asset analysis as technical analysis. I do not take into account current news or intrinisic financial factors of a
                            given crypto currency. Instead, I speculate on price and hope to capture investor sentiment and behavior through numbers. The advantage to my 
                            approach is consistency. I will execute the same strategy for every trade so long as my parameters remain constant. 

                            The key parameter that you the user define is when I buy an asset, my entry strategy, and when I sell an asset, my exit strategy.
                            Both of these strategies revolve around key technical values. The technical values that I look at to decide opportunities are below:

                            Technical Values:
                            1) Signal: How much has the cryptocurrency price changed over the past couple of days (you the user define the number of days)
                            2) Velocity: How quickly did the price change? This value is the percent change of the percent change, or the second derivative of price.
                            3) Inflection: What is the concavity of the price change? Concavity tracks whether or not a price is increasing in velocity or decreasing in velocity. 
                            A key indicator of inflection is whether or not the inflection value is changing from negative to positive or vice versa. Usually this signals that a
                            cryptocurrency price is changing its trends.

                            With all that in mind, the following are the various entry and exit strategies currently available in my brain.

                            Entry Strategies:
                            1) Standard: I will buy a crypto if it falls or rises by a certain percentage defined by you.
                            2) Signal-based: I will buy a crypto if the velocity and inflection values of a crypto are opposite one another.
                            3) Parameter Defined: I will buy a cryptocurrency based on research defined analysis
                            4) All: I will use all the strategies mentioned above and if all of their requirements are met I will buy a cryptocurrency.

                            Exit Strategies:
                            1) Hold: I will hold a cryptocurrency until it makes the required percentage gain defined by you.
                            2) Due Date: I will hold a cryptocurrency until it either makes the required percentage gain or the due date defined by you is passed.
                            3) Adaptive Hold: I will hold a cryptocurrency until research defined requirements are met and the cryptocurrency is at an ideal time to sell.
                            4) Adaptive Due Date: I will  hold a cryptocurrency until research defined requirements are met and the cryptocurrency is at an ideal time to sell
                            or until I run out of time. 

                            

                            </p>
                        <br></br>
            </div>
        </div>
    );
};

export default Background
