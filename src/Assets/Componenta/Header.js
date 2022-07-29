import React from 'react';
import { Sofa } from './Sofa';
import '../Style/HeaderStyle.css';
import { Footer } from './Footer';
import { Armchair } from './Armchair';
import { Article } from '../Componenta/Article';
import { Intro } from '../Componenta/Intro';
import { Offer } from '../Componenta/Offer';
import armChair from "../Images/Furniture 1.png";
import { Customer } from '../Componenta/Customer';
import armChairleft2 from "../Images/Container.png";
import armChairleft3 from "../Images/Container (8).png";
import armChairleft1 from "../Images/Container (2).png";




export function Header() {
    return (
        <div>
            <div id='navbar'>
               
                <div id='navbar-bottom'>
                    <div id='navbar-dropdown-items'>
                        <a href="">All</a>
                        <a href="">New Arrivals</a>
                        <a href="">Hot Sale</a>
                        <a href="">Furniture</a>
                        <a href="">Amrature</a>
                        <a href="">Table</a>
                        <a href="">Chair</a>
                        <a href="">Sofa</a>
                        <a href="">Mirrors</a>
                        <a href="">Stools</a>
                        <a href="">Benches</a>
                    </div>
                    <div id='header-corousel'>
                        <div id='header-corousel-text'>
                            <span>TOP COLLECTIONS 2022</span>
                            <h2>We Serve Your Dream Furniture</h2>
                            <p>Get 50% off all products</p>
                            <button><a href="">SHOP NOW</a></button>
                        </div>
                        <div>
                            <img src={armChair} alt="" />
                        </div>
                        <div id='header-armchairs'>
                            <div id='armChair1'>
                                <img src={armChairleft1} alt="" />
                                <span>$120</span>
                                <p>Office Desk Chair</p>
                            </div>
                            <div id='armChair2'>
                                <img src={armChairleft2} alt="" />
                                <span>$180</span>
                                <p>	Home Alisa Sofa</p>
                            </div>
                            <div id='armChair3'>
                                <img src={armChairleft3} alt="" />
                                <span>$250</span>
                                <p>Modern Chair</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Intro />
            <Armchair />
            <Offer />
            <Sofa />
            <Customer />
            <Article />
            <Footer />
        </div>
    )
}
