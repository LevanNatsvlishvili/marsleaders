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
      dynamicBullets: true,
      dynamicMainBullets: 2,
    },
    speed: 800,
    slidesPerView: 4,
    // breakpoints: {
    //   200: {
    //     spaceBetween: 15,
    //   },
    //   600: {
    //     spaceBetween: 30,
    //   },
    // },
    spaceBetween: 40,
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
      <div className="max-w-[1365px] mt-6-0">
        <Swiper modules={[Pagination, Navigation]} {...sliderOptions}>
          {list.map((item, i) => (
            <SwiperSlide
              key={item.id || i}
              className="swiper-slide-img-gallery cursor-pointer"
            >
              <img src={item} alt="" className=" " />
            </SwiperSlide>
          ))}
        </Swiper>

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

            .swiper-slide-img-gallery {
              height: 391px !important;
            }

            .swiper-slide-img-viewer {
              height: 22.2rem !important;
              width: 13.4rem !important;
            }
            .swiper-slide-img-viewer.active {
              width: 22.2rem !important;
            }
            .swiper-slide-img-viewer:hover {
              width: 22.2rem !important;
            }

            @media only screen and (max-width: 600px) {
              .swiper-slide-img-gallery {
                width: 188px !important;
                height: 188px !important;
                min-width: 188px !important;
              }

              .swiper-slide-img-viewer {
                width: 12rem !important;
                height: 19.8rem !important;
                &-active {
                  width: 16.3rem !important;
                }
              }
              .swiper-slide-img-viewer:hover {
                width: 12rem !important;
              }
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
