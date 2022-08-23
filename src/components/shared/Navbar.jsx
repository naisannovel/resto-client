import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart, faTimes, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { useHistory, useLocation } from "react-router";
import { Link, animateScroll } from "react-scroll";
import { isAuthenticated, userInfo } from "../utilities/authUtilities";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/user";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { role } = isAuthenticated() ? userInfo() : "";
  const history = useHistory();
  const location = useLocation()
  const dispatch = useDispatch();
  const cart = useSelector(state =>{
    return {
      cart: state.cart.cart
    }
  })

const [toggle,setToggle] = useState(false);

  return (
    <nav className="container-fluid navbar__main__container bg-light">
      <div className="container navbar__container">
        <div className="navbar__logo" onClick={()=> { location.pathname === '/' ? animateScroll.scrollToTop() : history.push('/') }}>
          <FontAwesomeIcon icon={faUtensils} />
          <span>Resto.</span>
        </div>
        <div className='navbar__nav' style={{top: !toggle ? '':'100%'}}>
                {
                  location.pathname === '/' ? 
                  <>
                  <Link to='home' onClick={()=> history.push('/')} smooth={true} duration={300} exact='true' offset={-65} spy={true}>Home</Link>
                  <Link to='dish' smooth={true} duration={300} exact='true' offset={-65} spy={true}>Dishes</Link>
                  <Link to='about' smooth={true} duration={300} exact='true' offset={-65} spy={true}>About</Link>
                  <Link to='review' smooth={true} duration={300} exact='true' offset={-65} spy={true}>Review</Link>
                  </> : ''
                }
                {
                  isAuthenticated() && role === 'admin' ? 
                  location.pathname.startsWith('/admin/dashboard') ? '' : <Link onClick={()=>history.push('/admin/dashboard')} >Dashboard</Link> : ''
                }
                {
                  isAuthenticated() ?
                  <button onClick={()=>{dispatch(logOut());history.push('/')}} className='primary__btn my-md-0 my-4'>Log Out</button>:
                  location.pathname === '/login' || location.pathname === '/signup' ? '' : <button onClick={()=> history.push('/login')} className='primary__btn my-md-0 my-4'>Log In</button>
                }
        </div>
        <div className="navbar__icon">
            {/* <div className='navbar-icon-hover'><FontAwesomeIcon icon={faHeart} /></div> */}
            <div className='navbar__cart__icon navbar-icon-hover' id="cart" onClick={()=> history.push('/cart')}>
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className='navbar__cart__count__container'> { cart.cart.length } </span>
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
