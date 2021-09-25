import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
SwiperCore.use([Pagination]);

const Review = () => {

    const reviewData = [
        {
        image:"assets/images/pic-1.png",
        name:"john deo",
        profession:"doctor",
        feedback:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni."
        },
        {
        image:"assets/images/pic-2.png",
        name:"john deo",
        profession:"doctor",
        feedback:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni."
        },
        {
        image:"assets/images/pic-3.png",
        name:"john deo",
        profession:"doctor",
        feedback:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni."
        },
        {
        image:"assets/images/pic-4.png",
        name:"john deo",
        profession:"doctor",
        feedback:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni."
        }
        ]

    // media query
    const [windowWidth,setWindowWidth] = useState(window.innerWidth)
    const handleResize = () => {setWindowWidth(window.innerWidth)};
    window.addEventListener("resize", handleResize);

    const swiperSlide = reviewData.map(item =>(
        <SwiperSlide>
            <div data-aos="fade-up" class="review__slide__container">
                <div class="review__user__info__container">
                    <div class="review__user__info">
                        <img src={item.image} alt="customer-img"/>
                        <div style={{marginLeft:'12px'}}>
                            <h3> { item.name } </h3>
                            <p> { item.profession } </p>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faQuoteRight} />
                </div>
                <p> { item.feedback } </p>
            </div>
        </SwiperSlide>
    ))

  return (
    <div className='review__main__container'>
      <div className="title">
        <p>About Us</p>
        <h3>why choose us?</h3>
      </div>
      <Swiper
        slidesPerView={windowWidth <= 720 ? 1:3}
        spaceBetween={30}
        freeMode={true}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="container"
      >
        { swiperSlide }
      </Swiper>
    </div>
  );
};

export default Review;
