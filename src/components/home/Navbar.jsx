import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHeart, faShoppingCart, faTimes, faUtensils } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

const [toggle,setToggle] = useState(false);

  return (
    <nav className="container-fluid navbar__main__container bg-light">
      <div className="container navbar__container">
        <div className="navbar__logo">
          <FontAwesomeIcon icon={faUtensils} />
          <span>Resto.</span>
        </div>
        <div className='navbar__nav' style={{top: !toggle ? '':'100%'}}>
                <a href="#">Home</a>
                <a href="#">Dishes</a>
                <a href="#">About</a>
                <a href="#">Review</a>
        </div>
        <div className="navbar__icon">
            {/* <div className='navbar-icon-hover'><FontAwesomeIcon icon={faHeart} /></div> */}
            <div className='navbar__cart__icon navbar-icon-hover'>
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className='navbar__cart__count__container'>5</span>
            </div>
            { !toggle ?
            <div className='navbar-icon-hover navbar__bar__icon' onClick={()=>setToggle(true)}><FontAwesomeIcon icon={faBars} /></div>:
            <div className='navbar-icon-hover navbar__cross__icon' onClick={()=>setToggle(false)}><FontAwesomeIcon icon={faTimes} /></div>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
