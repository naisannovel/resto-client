import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
SwiperCore.use([Pagination]);

const Review = () => {
  return (
    <div className='review__main__container'>
      <div className="title">
        <p>About Us</p>
        <h3>why choose us?</h3>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="container"
      >
        <SwiperSlide>
            <div class="review__slide__container">
                <div class="review__user__info__container">
                    <div class="review__user__info">
                        <img src="assets/images/pic-1.png" alt="customer-img"/>
                        <div style={{marginLeft:'12px'}}>
                            <h3>john deo</h3>
                            <p>doctor</p>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faQuoteRight} />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
