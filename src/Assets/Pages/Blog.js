import React from 'react'
import "../Style/Blog.css"
import notebook from '../Images/notebook.jpg'
import Typist from 'react-typist';


export function Blog() {
    return (
        <div id="blog-main">
            <div id='header-blog'>
                <div id='header-blog-text'>
                    <h1>Welcome to Furnking Company !</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quisquam animi repellat nam, </p>
                    <div>
                        <button>See more</button>
                        <button>Download</button>
                    </div>
                    <Typist>
                        Animate this text.
                    </Typist>
                </div>
            </div>
        </div>
    )
}
