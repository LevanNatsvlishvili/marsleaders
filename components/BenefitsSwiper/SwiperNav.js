import React, { forwardRef } from 'react';
import InlineSVG from 'react-inlinesvg';
import PropTypes from 'prop-types';
import { ArrowLeft, ArrowRight } from 'components/Icons/Arrow';
import { Dot } from 'components/Icons/Dot';

const SwiperNav = forwardRef((props, ref) => {
  const { nextRef, prevRef } = ref;
  return (
    <div className="md:flex hidden h-2-4 items-center w-full mt-5-2 pr-11-2 relative pl-16-2">
      <div className="bullet-pagination absolute !bottom-0 h-full">
        <div className="h-0-7 w-0-7 rounded-50-percent bg-[#E6E6E6] scroll" />
      </div>
      <div className="h-0-2 relative  w-full">
        <div className="!h-0-2 relative !bg-[#383838] w-full swiper-scrollbar" />
      </div>
      <div className="h-full absolute right-0  flex items-center">
        <div ref={prevRef} className="mr-0-9 cursor-pointer">
          <InlineSVG src={ArrowLeft.src} className="" />
        </div>
        <InlineSVG src={Dot.src} className="mr-0-9" />
        <div ref={nextRef} className="cursor-pointer">
          <InlineSVG src={ArrowRight.src} className="" />
        </div>
      </div>
      <style jsx>
        {`
          .bullet-pagination .swiper-pagination-bullet {
            margin-right: 3rem;
          }
          .swiper-pagination-bullet:last-child {
            margin-right: 0;
          }
          .bullet-pagination .swiper-pagination-bullet {
            background: #fff;
          }
        `}
      </style>
    </div>
  );
});

SwiperNav.propTypes = {
  isNavOn: PropTypes.bool,
};
SwiperNav.defaultProps = {
  isNavOn: true,
};
SwiperNav.displayName = 'SwiperNav';

export default SwiperNav;
