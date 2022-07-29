import React from 'react';
import "../Style/Footer.css";
import mainLogo from '../Images/logo.png';
import twitter from "../Images/ic-twitter.svg";
import facebook from "../Images/ic-facebook.svg";
import instagram from "../Images/ic-instagram.svg";
import pinterest from "../Images/ic-pinterset.svg";




export function Footer() {
    return (
        <div>
            <div id='footer'>
                <div id='footer-top'>
                    <div id='Block' data-aos="fade-right">
                        <div id='footer-logo'>
                            <img src={mainLogo} alt="" />
                            <span>Furniking</span>
                        </div>
                        <p>Funking is the a popular Ecommerce site. <br/> Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor</p>
                        <div id='footer-social'>
                            <img src={facebook} alt="" />
                            <img src={twitter} alt="" />
                            <img src={instagram} alt="" />
                            <img src={pinterest} alt="" />
                        </div>
                    </div>
                    <div id='Block' data-aos="fade-up">
                        <p id='footer-header-name'>Help</p>
                        <a href="">Privacy Policy</a>
                        <a href="">Shiping & Delivery</a>
                        <a href="">Refund Policy</a>
                        <a href="">Track Your Order</a>
                    </div>
                    <div id='Block' data-aos="fade-up">
                        <p id='footer-header-name'>Store</p>
                        <a href="">Furniture</a>
                        <a href="">Tabble</a>
                        <a href="">Sofa</a>
                        <a href="">Other</a>
                    </div>
                    <div id='Block' data-aos="fade-up">
                        <p id='footer-header-name'>Supports</p>
                        <a href="">Feedback</a>
                        <a href="">Contact us</a>
                        <a href="">Download app</a>
                        <a href="">Terms conditions</a>
                    </div>
                </div>
            <hr />
                <div id='footer-bottom'>
                    <p>© 2021 Funking - All rights reserved.</p>
                    <div>
                        <a href="">Privacy</a>
                        <a href="">Security</a>
                        <a href="">Terms</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
