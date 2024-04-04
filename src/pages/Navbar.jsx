import { useState, useEffect, useRef } from "react"; //React from 'react'
import "./navbar.css";
import logo from "../IconsHanddrawn/logo.png";
import about from "../IconsHanddrawn/about.png";
import icons from "../IconsHanddrawn/iconsproduct.png";
import contact from "../IconsHanddrawn/contact.png";
import cart from "../IconsHanddrawn/shoppingCart.png";
import profile from "../IconsHanddrawn/profile.png";
import navbarSelector from "../IconsHanddrawn/navbarSelector.png";
import menu from "../IconsHanddrawn/menu.png";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Profile from "./Profile.jsx";
import Cart from "./Cart.jsx";
import Icons from "./Icons.jsx";
import { useShoppingCart } from "use-shopping-cart";
import { useSnackbar } from 'notistack';
import { useAuth0 } from "@auth0/auth0-react";

const navbar = () => {
  const [currentPage, setCurrentPage] = useState("about");
  const [category, setCategory] = useState("All");
  const [menuclicked, setMenuClicked] = useState(false);
  const { isAuthenticated, isLoading } = useAuth0();
  const { enqueueSnackbar } = useSnackbar();
  const prevIsAuthenticatedRef = useRef(isAuthenticated)

  useEffect(() => {
    
      if (isAuthenticated && !prevIsAuthenticatedRef.current) {
        enqueueSnackbar("Successfully logged in", { variant: 'success' });
      } else if (!isAuthenticated && prevIsAuthenticatedRef.current) {
        enqueueSnackbar("Successfully logged out", { variant: 'info' });
      }
      prevIsAuthenticatedRef.current = isAuthenticated;
    
  }, [isAuthenticated, enqueueSnackbar, isLoading]);

  const handlePageChange = (page, categoryAttribute) => {
    setCurrentPage(page);
    setCategory(categoryAttribute);
    setMenuClicked(false);
  };

  const { cartCount } = useShoppingCart();

  return (
    <div className="n-navbar-container">




     {/* Mobile Menu */}


 <img src={menu} id="nav-menu-img" alt="" className={menuclicked ? 'rotated' : ''} 
          onClick={() => setMenuClicked(prev => !prev)}
        />
       <div className={`mobile-menu ${menuclicked? '' : 'hidden'}`}>
       
        {menuclicked && (
          <div className='navbar-items'>
            <div className="n-about-container mobile-item">
              <img src={about} onClick={() => handlePageChange("about")} alt="" />
            </div>
            
            <div className="n-icons-container mobile-item">
              <img src={icons} onClick={() => handlePageChange("icons")} alt="" />
            </div>
            <div className="n-contact-container mobile-item">
              <img src={contact} onClick={() => handlePageChange("contact")} alt="" />
            </div>
           
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            <div className="n-profile-container mobile-item">
              <img src={profile} onClick={() => handlePageChange("profile")} alt="" />
            </div>
          
          
          
          
          
          </div>
        )}
 


      </div>
      {cartCount > 0 && <span className="mobile-cart-count">{cartCount}</span>}
<div className="n-mobile-cart-container">
        <img
          className="cart-img"
          src={cart}
          onClick={() => handlePageChange("cart")}
          alt=""
          id="cartIcon"
        />
        
      </div>



     



      <div className="n-logo-container">
        <img src={logo} onClick={() => handlePageChange("about")} alt="" />
      </div>
      <div className="n-about-container">
        <img src={about} onClick={() => handlePageChange("about")} alt="" />
        <div
          className={`navbar-selector ${currentPage === "about" ? "show" : ""}`}
        >
          <img src={navbarSelector} alt="" />
        </div>
      </div>
      <div className="n-icons-container">
        <img src={icons} onClick={() => handlePageChange("icons")} alt="" />

        <div
          className={`navbar-selector ${currentPage === "icons" ? "show" : ""}`}
        >
          <img src={navbarSelector} alt="" />
        </div>
      </div>
      <div className="n-contact-container">
        <img src={contact} onClick={() => handlePageChange("contact")} alt="" />
        <div
          className={`navbar-selector ${
            currentPage === "contact" ? "show" : ""
          }`}
        >
          <img src={navbarSelector} alt="" />
        </div>
      </div>
      <div className="n-cart-container">
        <img
          className="cart-img"
          src={cart}
          onClick={() => handlePageChange("cart")}
          alt=""
          id="cartIcon"
        />
        <div
          className={`navbar-selector ${currentPage === "cart" ? "show" : ""}`}
        >
          <img src={navbarSelector} alt="" />
        </div>
      </div>
      <div className="n-profile-container">
        <img
          className="profile-img"
          src={profile}
          onClick={() => handlePageChange("profile")}
          alt=""
        />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        <div
          className={`navbar-selector ${
            currentPage === "profile" ? "show" : ""
          }`}
        >
          <img src={navbarSelector} alt="" />
        </div>
      </div>

      {currentPage === "contact" && <Contact />}
      {currentPage === "icons" && <Icons />}
      {currentPage === "about" && <About />}
      {currentPage === "cart" && <Cart />}
      {currentPage === "profile" && <Profile />}
    </div>
  );
};

export default navbar;
