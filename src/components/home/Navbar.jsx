import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart, faTimes, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
import { Link, animateScroll } from "react-scroll";

const Navbar = () => {
const history = useHistory()

const [toggle,setToggle] = useState(false);

  return (
    <nav className="container-fluid navbar__main__container bg-light">
      <div className="container navbar__container">
        <div className="navbar__logo" onClick={()=> { history.push('/'); animateScroll.scrollToTop();}}>
          <FontAwesomeIcon icon={faUtensils} />
          <span>Resto.</span>
        </div>
        <div className='navbar__nav' style={{top: !toggle ? '':'100%'}}>
                <Link to='home' smooth={true} duration={300} exact='true' offset={-65} spy={true}>Home</Link>
                <Link to='dish' smooth={true} duration={300} exact='true' offset={-65} spy={true}>Dishes</Link>
                <Link to='about' smooth={true} duration={300} exact='true' offset={-65} spy={true}>About</Link>
                <Link to='review' smooth={true} duration={300} exact='true' offset={-65} spy={true}>Review</Link>
                <Link onClick={()=>history.push('/admin/dashboard')} >Dashboard</Link>
                <button onClick={()=> history.push('/login')} className='primary__btn my-md-0 my-4'>Log In</button>
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
