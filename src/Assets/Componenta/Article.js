import React from 'react'
import tag from "../Images/Tag.png"
import tag2 from "../Images/Tag (1).png"
import tag3 from "../Images/Tag (2).png"
import tag4 from "../Images/Tag (3).png"
import "../Style/Article.css"




export function Article() {
    return (
        <div id='article'>
            <h1>Our Latest Articles</h1>
            <div id='article-inside'>
                <div id='article-first-line'>
                    <div id='article-first-card' data-aos="fade-right">
                        <div id='article-text'>
                        <div id='article-discount'>
                            <img src={tag} alt="" />      
                           <span>21233 September 2022</span>    
                        </div>
                        <p>Begineer guide buying minimal sofa</p>
                        <a href="">Read more</a>
                        </div>
                    </div>
                    <div id='article-second-card' data-aos="fade-left">
                        <div id='article-text'>
                        <div id='article-discount'>
                            <img src={tag2} alt="" />    
                           <span>23 September 2022</span>    
                        </div>
                        <p>Begineer guide buying minimal sofa</p>
                        <a href="">Read more</a>
                        </div>
                    </div>
                </div>
                <div id='article-second-line'>
                    <div id='article-third-card' data-aos="fade-right">
                        <div id='article-text'>
                        <div id='article-discount'>
                            <img src={tag3} alt="" />
                           <span>23 September 2022</span>    
                        </div>
                        <p>Begineer guide buying minimal sofa</p>
                        <a href="">Read more</a>
                        </div>
                    </div>
                    <div id='article-fourth-card' data-aos="fade-left">
                        <div id='article-text'>
                        <div id='article-discount'>
                           <img src={tag4} alt="" />
                           <span>23 September 2022</span>    
                        </div>
                        <p>Begineer guide buying minimal sofa</p>
                        <a href="">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
