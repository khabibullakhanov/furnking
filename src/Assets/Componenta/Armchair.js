import React from 'react';
import "../Style/Armchair.css";
import star from "../Images/star.svg";
import halfStar from "../Images/star (1).png";
import online from "../Images/Circle (4).png";
import offline from "../Images/Circle (3).png";
import armChair2 from "../Images/Container (2).png";
import { SofaCompanenta } from './SofaCompanenta';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CachedIcon from '@mui/icons-material/Cached';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';




export function Armchair() {

    return (
        <div data-aos="fade-down">
            <div id='trending'>
                <h1>TRENDING</h1>
                <div id='trending-navbar'>
                    <a href="">Top Products</a>
                    <a href="">New Arrivals</a>
                    <a href="">Best Sellers</a>
                </div>
                <div id='sales-armChairs'>
                    <div id='first-line-armchairs'>
                        <SofaCompanenta />
                    </div>
                </div>


                <div id='sales-armChairs'>
                    <div id='second-line-armchairs'>
                        <SofaCompanenta/>
                    </div>
                </div>


                <div id='corousel-bottom-icons'>
                    <img src={offline} alt="" />
                    <img src={online} alt="" />
                </div>
            </div>
        </div>
    )
}
