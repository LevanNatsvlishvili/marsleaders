/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import PropTypes from 'prop-types';
import InlineSVG from 'react-inlinesvg';
import { Twitter } from 'components/Icons/Twitter';

const TeamSwiper = (props) => {
  const { list } = props;

  const sliderOptions = {
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
      280: {
        slidesPerView: 1.25,
      },
      350: {
        slidesPerView: 1.5,
      },
      450: {
        slidesPerView: 2.5,
      },
      600: {
        slidesPerView: 3.5,
      },
      850: {
        slidesPerView: 4.3,
      },
      950: {
        slidesPerView: 5,
      },
    },
  };

  return (
    <div className="w-full">
      {/* <div className="w-full bg-[#383838] h-0-1 mt-5-2" /> */}
      <div className="w-full mt-6-0 ">
        <div className="">
          <Swiper
            modules={[Navigation]}
            {...sliderOptions}
            className="team-swiper"
          >
            {list.map((item, i) => (
              <SwiperSlide key={item.id || i} className="cursor-pointer ">
                <div className="w-full">
                  <img src={item.img} alt="" className="h-full w-full" />
                  <div className="bg-[#3b3535] p-2-0 h-15-0">
                    <div className="flex items-center">
                      <p className="text-2-8 text-white leading-4-4 tracking-0-84 font-techno">
                        {item.name}
                      </p>
                      <span className="ml-auto rotate-90">
                        <InlineSVG src={Twitter.src} />
                      </span>
                    </div>
                    <p className="mt-1-2 text-2-2 text-white leading-2-7 tracking-0-66 font-galatea">
                      {item.position}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

TeamSwiper.propTypes = {
  list: PropTypes.array,
};
TeamSwiper.defaultProps = {
  list: [],
};

export default TeamSwiper;
