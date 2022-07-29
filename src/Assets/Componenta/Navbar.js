import React from 'react';
import { Link } from 'react-router-dom';



export function Navbar() {
  return (
    <div>
      <div id='navbar-items'>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/shop">CRUD</Link></li>
        <li><Link to="/blog">BLOG</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/contact">CONTACT US</Link></li>
      </div>
    </div>
  )
}
