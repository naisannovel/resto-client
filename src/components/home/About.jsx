import { faDollarSign, faHeadset, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const About = () => {
  document.title = 'Resto.'

  return (
    <div className="container about__main__container mt-5" id='about'>
      <div className="title">
        <p>About Us</p>
        <h3>why choose us?</h3>
      </div>
      <div className="row">
        <div data-aos="flip-left" className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src="assets/images/about.png"
            style={{ width: "100%", height: "100%" }}
            alt="aboutImage"
          />
        </div>
        <div data-aos="flip-right" className="col-md-6 about__content__container">
          <h3>best food in the country</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            sequi corrupti corporis quaerat voluptatem ipsam neque labore modi
            autem, saepe numquam quod reprehenderit rem? Tempora aut soluta odio
            corporis nihil!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
            nemo. Sit porro illo eos cumque deleniti iste alias, eum natus.
          </p>
          <div className="about__icons__container">
            <div className="about__icons">
              <FontAwesomeIcon icon={faTruck} />
              <span>free delivery</span>
            </div>
            <div className="about__icons">
              <FontAwesomeIcon icon={faDollarSign} />
              <span>easy payments</span>
            </div>
            <div className="about__icons">
              <FontAwesomeIcon icon={faHeadset} />
              <span>24/7 service</span>
            </div>
          </div>
          <button className="primary__btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
