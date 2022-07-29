import React from "react";
import "../src/Assets/Style/App.css";
import { Home } from "./Assets/Pages/Home";
import { Shop } from "./Assets/Pages/Shop";
import { Blog } from "./Assets/Pages/Blog";
import { About } from "./Assets/Pages/About";
import { Contact } from "./Assets/Pages/Contact";
// import { Header } from './Assets/Componenta/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderTop } from "./Assets/Componenta/HeaderTop";
import { Products } from "./Assets/Pages/See/Products";
import { Basket } from "./Assets/Pages/Basket";
import { Notification } from "./Assets/Pages/Notification";
import { Login } from "./Assets/Pages/See/Login";
import ScrollToTop from "react-scroll-to-top";
import AOS from "aos";
import { Loading } from "./Assets/Loading/Loading";
import { Edite } from "./Assets/Componenta/Edite";

function App() {
  AOS.init();
  setTimeout(() => {
    <Loading load={true} />;
  }, 2000);
  return (
    <Router>
      <div className="App">
        <div id="header-sticiy">
          <HeaderTop />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/seeProduct" element={<Products />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog/editSeeCard" element={<Edite />} />
        </Routes>
        {/* <Header/> */}
        <ScrollToTop smooth top="40" id="scrollTop" />
      </div>
    </Router>
  );
}

export default App;
