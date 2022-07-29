import React from 'react';
import "../Style/Customer.css";
import corouselNext from "../Images/Icon Color.png";
import corouselUser from "../Images/Image Placeholder.png";






export function Customer() {
    return (
        <div data-aos="fade-down">
            <div id='footer-corousel'>
                <h1>What Our Customer Says</h1>
                <div id='footer-corousel-inside'>
                    <div>
                        <img src={corouselNext} alt="" />
                    </div>
                    <div id='footer-corousel-center'>
                        <img src={corouselUser} alt="" />
                        <div id='footer-corousel-center-text'>
                        <p>I like Furniking.com and as compared to other company it's polices and customers support is very good easy to reach., also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.</p>
                        <span>Angelina Joly</span>
                        <p>Co-founder</p>
                        </div>
                    </div>
                    <div id='footer-rotate'>
                        <img src={corouselNext} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
