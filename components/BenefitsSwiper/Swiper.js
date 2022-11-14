/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react';
import { Pagination, Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PropTypes from 'prop-types';
import SwiperNav from './SwiperNav';
// import Promo from 'components/Promo';
import InlineSVG from 'react-inlinesvg';
import {
  Benefits,
  BenefitsLand,
  BenefitsPassport,
  BenefitsPresident1,
  BenefitsPresident2,
  BenefitsPresident3,
  BenefitsPresident4,
  BenefitsPresident5,
  BenefitsPrize,
} from 'components/Icons/Benefits';

const BenefitsSwiper = (props) => {
  const { list } = props;

  const bPrevRef = useRef(null);
  const bNextRef = useRef(null);

  const sliderOptions = {
    navigation: {
      prevEl: bPrevRef.current ? bPrevRef.current : null,
      nextEl: bNextRef.current ? bNextRef.current : null,
    },
    pagination: {
      type: 'progressbar',
      el: '.scroll',
    },
    speed: 800,
    breakpoints: {
      200: {
        slidesPerView: 'auto',
      },
      600: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
    spaceBetween: 15,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    onInit: (swiper) => {
      swiper.params.navigation.prevEl = bPrevRef.current;
      swiper.params.navigation.nextEl = bNextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    },
  };

  return (
    <div>
      <div className="w-full mt-3-0 ">
        <div className="">
          <Swiper
            modules={[Pagination, Navigation]}
            {...sliderOptions}
            className=""
          >
            {list.map((item, i) => (
              <SwiperSlide key={item.id || i} className="cursor-pointer ">
                <div className="h-full bg-red-dark flex items-center flex-col justify-center py-4-0 px-2-0 lg:py-3-7 lg:px-8-6">
                  <InlineSVG
                    className="h-12-0 w-12-0"
                    src={BenefitsPrize.src}
                  />
                  <p className="text-center sm:text-1-6 lg:text-2-4 leading-3-2 tracking-0-78 text-white mt-2-2">
                    Win a share from the $500k competition prize pool
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <SwiperNav
          ref={{
            prevRef: bPrevRef,
            nextRef: bNextRef,
          }}
        />
        <style global jsx>
          {`
            .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
              background: #00afcf;
            }

            @media only screen and (max-width: 600px) {
              .swiper-slide {
                width: 70%;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

BenefitsSwiper.propTypes = {
  list: PropTypes.array,
};
BenefitsSwiper.defaultProps = {
  list: [],
};

export default BenefitsSwiper;
