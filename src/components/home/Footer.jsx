import React from 'react';

const Footer = () => {
    return (
        <div>
        <div className='container footer__main__container'>
            <div className="footer__content__container">
                <h3>locations</h3>
                <a href="#">india</a>
                <a href="#">japan</a>
                <a href="#">russia</a>
                <a href="#">USA</a>
                <a href="#">france</a>
            </div>
            <div className="footer__content__container">
                <h3>quick links</h3>
                <a href="#">home</a>
                <a href="#">dishes</a>
                <a href="#">about</a>
                <a href="#">menu</a>
                <a href="#">reivew</a>
                <a href="#">order</a>
            </div>
            <div className="footer__content__container">
                <h3>contact info</h3>
                <a href="#">+123-456-7890</a>
                <a href="#">+111-222-3333</a>
                <a href="#">shaikhanas@gmail.com</a>
                <a href="#">anasbhai@gmail.com</a>
                <a href="#">mumbai, india - 400104</a>
            </div>
            <div className="footer__content__container">
                <h3>follow us</h3>
                <a href="#">facebook</a>
                <a href="#">twitter</a>
                <a href="#">instagram</a>
                <a href="#">linkedin</a>
            </div>
        </div>
            <div class="footer__credit"> copyright @ { new Date().getFullYear() } by <span>naiasn novel</span> </div>
            </div>
    );
};

export default Footer;