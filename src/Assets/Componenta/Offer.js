import React from 'react';
import '../Style/Offer.css';




export function Offer() {
    return (
        <div>
            <div id='special-offers'>
                <h1>SPECIAL OFFER</h1>
                <div id='special-offers-inside'>
                    <div id='offer-left' data-aos="fade-right">
                        <p id='offer-p-text'>Living Room Furniture</p>
                        <span id='offer-span-text'>You don't have a chair. Are you ready  for <br /> growth? Shop with us 40% discount!</span>
                        <div id='offer-cost-text'>
                            <p href="">$150</p>
                            <p href="">$250</p>
                            <button id='offer-shop-btn'><a href="">SHOP NOW</a></button>
                        </div>
                        <div id='offer-date'>
                            <div>
                                <p>10</p>
                                <span>DAY</span>
                            </div>
                            <div>
                                <p>15</p>
                                <span>HRS</span>
                            </div>
                            <div>
                                <p>30</p>
                                <span>MIN</span>
                            </div>
                            <div>
                                <p>22</p>
                                <span>SEC</span>
                            </div>
                        </div>
                    </div>
                    <div id='offer-right' data-aos="fade-left">
                        <p id='offer-p-text'>Modern chair</p>
                        <span id='offer-span-text'>Hot chairs of the modern era are <br /> now  available in our stock.</span>
                        <div id='offer-cost-text'>
                            <p href="">$75</p>
                            <p href="">$150</p>
                            <button id='offer-shop-btn'><a href="">SHOP NOW</a></button>
                        </div>
                        <div id='offer-date'>
                            <div>
                                <p>10</p>
                                <span>DAY</span>
                            </div>
                            <div>
                                <p>15</p>
                                <span>HRS</span>
                            </div>
                            <div>
                                <p>30</p>
                                <span>MIN</span>
                            </div>
                            <div>
                                <p>22</p>
                                <span>SEC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
