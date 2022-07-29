import React from 'react';
import "../Style/Intro.css";
import present from "../Images/Shape.png";
import purse from "../Images/Vector (6).png";
import headPhone from "../Images/Vector (9).png";
import delivery from "../Images/free-delivery 1.png";




export function Intro() {
    return (
        <div>
            <div id='intro-top'>
                <div>
                    <img src={delivery} alt="" />
                    <div>
                        <p>Free Shipping</p>
                        <span>Orders over $100</span>
                    </div>
                </div>
                <div>
                    <img src={purse} alt="" />
                    <div>
                        <p>Smart Gift Card</p>
                        <span>Buy $1000 to get card</span>
                    </div>
                </div>
                <div>
                    <img src={present} alt="" />
                    <div>
                        <p>Quick Payment</p>
                        <span>100% secure payment</span>
                    </div>
                </div>
                <div>
                    <img src={headPhone} alt="" />
                    <div>
                        <p>24/7 Support</p>
                        <span>Quick support</span>
                    </div>
                </div>
            </div>

            <div id='intro'>
                <div id='intro-left'>
                    <div id='intro-left-text'>
                        <p>Modern Furniture Collections</p>
                        <span>Starting from $500</span>
                        <a href="">Read more &#8594;</a>
                    </div>
                </div>
                <div id='intro-right'>
                    <div id='intro-right-top'>
                        <div id='intro-right-top-text'>
                            <p>Minimal Sofa collections </p>
                            <span>Sale upto 40% discount</span>
                            <a href="">Rea more &#8594;</a>
                        </div>
                    </div>
                    <div id='intro-right-bottom'>
                        <div id='intro-right-bottom-text'>
                            <p>Geometric Bookcase</p>
                            <span>Up to 20% discount</span>
                            <a href="">Rea more &#8594;</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
