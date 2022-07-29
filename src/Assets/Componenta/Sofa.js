import React from 'react';
import "../Style/Sofa.css"
import { SofaCompanenta } from './SofaCompanenta';
import star from "../Images/star.svg";
import halfStar from "../Images/star (1).png";
import armChair2 from "../Images/Container (2).png";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CachedIcon from '@mui/icons-material/Cached';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';



export function Sofa() {
    return (
        <div id='pr-main'>
            <div id='products' data-aos="fade-down">
                <h1>TRENDING</h1>
                <div id='products-navbar'>
                    <a href="">All Products</a>
                    <a href="">Best Sellers</a>
                    <a href="">New Arrivals</a>
                    <a href="">Todays Deals</a>
                </div>
                <div id='sales-sofas'>
                    <div id='fir-line'>
                        <div id='fir-line'>
                            <SofaCompanenta />
                        </div>
                    </div>
                    <div id='sec-line'>
                        <SofaCompanenta />
                    </div>



                    <div id='pagination'>
                        <div id='pagination-inside'>
                            <div>
                                <button id='pagination-next'><a href="">Next Page &#8594;</a></button>
                            </div>
                            <div id='pagination-pages'>
                                <span>Page</span>
                                <button id='page1'>1</button>
                                <span>of 100</span>
                                <button id='back-forth'><a href="">&#8249;</a><a href="">&#8250;</a></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
