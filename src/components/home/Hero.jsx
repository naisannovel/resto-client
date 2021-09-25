import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
SwiperCore.use([EffectFade, Navigation, Pagination]);

const Hero = () => {

  const data = [
    {
    subHeader:"our special dish",
    header:"spicy noodles",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque",
    image: "assets/images/home-img-1.png"
    },
    {
    subHeader:"our special dish",
    header:"fried chicken",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque",
    image: "assets/images/home-img-2.png"
    },
    {
    subHeader:"our special dish",
    header:"hot pizza",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque",
    image: "assets/images/home-img-3.png"
    }
    ]

    const slider = data.map(item =>(
      <SwiperSlide>
        <div className="container">
          <div className="row">
            <div data-aos="fade-right" className="col-md-6 order-md-1 order-2 hero__content__container">
              <h4> {item.subHeader} </h4>
              <h1> { item.header } </h1>
              <p> { item.paragraph } </p>
              <button className='primary__btn'>Order Now</button>
            </div>
            <div data-aos="fade-left" className="col-md-6 order-md-2 order-1 hero__slider__img__container">
                <img src={item.image} className='hero__slider__img' alt="slider" />
            </div>
          </div>
        </div>
    </SwiperSlide>
    ))

  return (
    <div>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        className="hero__swiper__container"
      >
        { slider }
      </Swiper>
    </div>
  );
};

export default Hero;
