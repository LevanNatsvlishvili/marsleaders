/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react';
import { Pagination, Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PropTypes from 'prop-types';
import SwiperNav from './SwiperNav';

const CardSlider = (props) => {
  const { list, id } = props;

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const sliderOptions = {
    navigation: {
      prevEl: prevRef.current ? prevRef.current : null,
      nextEl: nextRef.current ? nextRef.current : null,
    },
    pagination: {
      type: 'bullets',
      el: `.${id}`,
      // el: id,
    },
    speed: 800,
    breakpoints: {
      200: {
        slidesPerView: 1.25,
      },
      600: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
    spaceBetween: 10,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    allowTouchMove: true,
    onInit: (swiper) => {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    },
  };

  return (
    <div className="h-full">
      <div className="w-full bg-[#383838] h-0-1 mt-5-2" />
      <div className="w-full mt-6-0 ">
        <div className="swiper-component">
          <Swiper
            modules={[Pagination, Navigation]}
            {...sliderOptions}
            className=""
          >
            {list.map((item, i) => (
              <SwiperSlide key={item.id || i} className="cursor-pointer ">
                <img src={item} alt="" className="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {id === 'desktop-swiper' && (
          <SwiperNav
            id={id}
            ref={{
              prevRef: prevRef,
              nextRef: nextRef,
            }}
          />
        )}
        <style global jsx>
          {`
            .swiper-component
              > .swiper-pagination-progressbar
              .swiper-pagination-progressbar-fill {
              background: #00afcf;
            }

            @media only screen and (max-width: 600px) {
              .swiper-component .swiper-slide {
                width: 26rem !important;
                height: 30rem !important;
                min-width: 26rem !important;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

CardSlider.propTypes = {
  list: PropTypes.array,
};
CardSlider.defaultProps = {
  list: [],
};

export default CardSlider;
