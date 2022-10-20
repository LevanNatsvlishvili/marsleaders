import React, { forwardRef } from 'react';
import InlineSVG from 'react-inlinesvg';
import PropTypes from 'prop-types';
import { ArrowLeft, ArrowRight } from 'components/Icons/Arrow';
import { Dot } from 'components/Icons/Dot';

const SwiperNav = forwardRef((props, ref) => {
  const { nextRef, prevRef } = ref;
  return (
    <div className="h-2-4 flex items-center w-full mt-5-2 pr-11-2 relative pl-16-2">
      {/* <div className="absolute left-0 ">
        <div className="relative">
          <div className="bullet-pagination absolute right-0"></div>
        </div>
        <div className="h-0-7 w-0-7 rounded-50-percent bg-[#E6E6E6] " />
      </div> */}
      <div className="h-0-2 relative  w-full">
        <div className="!h-0-2 relative !bg-[#383838] w-full swiper-scrollbar" />
      </div>
      <div className="h-full  absolute right-0 2xl:flex hidden flex items-center">
        <div ref={prevRef} className="mr-0-9 cursor-pointer">
          <InlineSVG src={ArrowLeft.src} className="" />
        </div>
        <InlineSVG src={Dot.src} className="mr-0-9" />
        <div ref={nextRef} className="cursor-pointer">
          <InlineSVG src={ArrowRight.src} className="" />
        </div>
      </div>
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
