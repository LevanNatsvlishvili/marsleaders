import React, { forwardRef } from 'react';
import InlineSVG from 'react-inlinesvg';
import PropTypes from 'prop-types';
import { ArrowLeft, ArrowRight } from 'components/Icons/Arrow';
import { Dot } from 'components/Icons/Dot';
import clsx from 'clsx';

const SwiperNav = forwardRef((props, ref) => {
  const { nextRef, prevRef } = ref;
  const { length } = props;
  return (
    <div
      className={clsx(
        'md:flex hidden h-2-4 items-center w-full mt-5-2 relative',
        length > 3 && 'pr-11-2'
      )}
    >
      <div className="h-0-2 relative w-full">
        <div className="!h-0-2 relative !bg-red-dark w-full " />
      </div>
      {length > 3 && (
        <div className="h-full absolute right-0  flex items-center">
          <div ref={prevRef} className="mr-0-9 cursor-pointer">
            <InlineSVG src={ArrowLeft.src} className="" />
          </div>
          <InlineSVG src={Dot.src} className="mr-0-9 fill-red-dark" />
          <div ref={nextRef} className="cursor-pointer">
            <InlineSVG src={ArrowRight.src} className="" />
          </div>
        </div>
      )}
    </div>
  );
});

SwiperNav.propTypes = {
  length: PropTypes.number,
};
SwiperNav.defaultProps = {
  length: 4,
};
SwiperNav.displayName = 'SwiperNav';

export default SwiperNav;
