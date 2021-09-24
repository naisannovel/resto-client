import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";
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
            <h1>hello world</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
