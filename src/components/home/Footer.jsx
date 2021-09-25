import React from 'react';

const Footer = () => {
    return (
        <div>
        <div className='container footer__main__container'>
            <div className="footer__content__container">
                <h3>locations</h3>
                <a href="#">Bangladesh</a>
                <a href="#">USA</a>
                <a href="#">China</a>
                <a href="#">russia</a>
            </div>
            <div className="footer__content__container">
                <h3>quick links</h3>
                <a href="#">home</a>
                <a href="#">dishes</a>
                <a href="#">about</a>
                <a href="#">reivew</a>
            </div>
            <div className="footer__content__container">
                <h3>contact info</h3>
                <a href="#">+123-456-7890</a>
                <a href="#">naisannovel@gmail.com</a>
                <a href="#">naisan@yahoo.com</a>
                <a href="#">Dhaka, Bangladesh - 1216</a>
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