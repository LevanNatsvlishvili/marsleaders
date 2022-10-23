/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { Pagination, Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PropTypes from 'prop-types';
import SwiperNav from './SwiperNav';
// import Promo from 'components/Promo';

const GallerySlider = (props) => {
  const { list } = props;

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const sliderOptions = {
    navigation: {
      prevEl: prevRef.current ? prevRef.current : null,
      nextEl: nextRef.current ? nextRef.current : null,
    },
    pagination: {
      type: 'bullets',
      el: '.bullet-pagination',
      // dynamicBullets: true,
      // dynamicMainBullets: 2,
    },
    speed: 800,
    slidesPerView: 1,
    // breakpoints: {
    //   200: {
    //     spaceBetween: 15,
    //   },
    //   600: {
    //     spaceBetween: 30,
    //   },
    // },
    spaceBetween: 10,
    onInit: (swiper) => {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    },
  };

  return (
    <div>
      <div className="w-full bg-[#383838] h-0-1 mt-5-2" />
      <div className="w-full mt-6-0 ">
        <div className="-mx-2-0">
          <Swiper
            modules={[Pagination, Navigation]}
            {...sliderOptions}
            className=""
          >
            {list.map((item, i) => (
              <SwiperSlide key={item.id || i} className="cursor-pointer">
                <div className="flex w-full pl-2-0">
                  <div className="pr-4-0 w-25-percent">
                    <img src={item.img1} alt="" className=" " />
                  </div>
                  <div className="pr-4-0 w-25-percent">
                    <img src={item.img1} alt="" className=" " />
                  </div>
                  <div className="pr-4-0 w-25-percent">
                    <img src={item.img1} alt="" className=" " />
                  </div>
                  <div className="pr-4-0 w-25-percent">
                    <img src={item.img1} alt="" className=" " />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <SwiperNav
          ref={{
            prevRef: prevRef,
            nextRef: nextRef,
          }}
        />
        <style global jsx>
          {`
            .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
              background: #00afcf;
            }
          `}
        </style>
      </div>
    </div>
  );
};

GallerySlider.propTypes = {
  isNavOn: PropTypes.bool,
  type: PropTypes.string,
  list: PropTypes.array,
  onSlideClick: PropTypes.func,
  value: PropTypes.string || PropTypes.bool,
};
GallerySlider.defaultProps = {
  isNavOn: false,
  type: 'imageGallery',
  list: [],
  onSlideClick: () => {},
  value: '' || false,
};

export default GallerySlider;
