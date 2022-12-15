import clsx from 'clsx';
import {
  ScrollArrow,
  ScrollMouse,
  ScrollMouseMobile,
} from 'components/Icons/Scroll';
import { motion } from 'framer-motion';
import React from 'react';
import InlineSVG from 'react-inlinesvg';

function ScrollDown({ currView, loading }) {
  return (
    <div
      className={clsx(
        'flex items-center flex-col -mb-10-0 duration-1000 opacity-0',
        {
          '!opacity-100': currView === 0,
          '!opacity-0': loading,
        }
      )}
    >
      <InlineSVG src={ScrollMouse.src} className="md:block hidden" />
      <InlineSVG src={ScrollMouseMobile.src} className="md:hidden block" />
      <motion.div
        className=""
        transition={{
          y: {
            duration: 1,
            yoyo: Infinity,
            ease: 'easeIn',
          },
        }}
        animate={{ y: ['0px', '5px'] }}
      >
        <InlineSVG src={ScrollArrow.src} />
      </motion.div>
      <p className="font-techno hidden md:block text-1-4 leading-1-9 tracking-0-3 text-text-primary mt-1-8 font-blonde">
        scroll down for travel
      </p>
      <p className="font-techno block md:hidden text-1-4 leading-1-9 tracking-0-3 text-text-primary mt-1-8 font-blonde">
        swipe down for travel
      </p>
    </div>
  );
}

export default ScrollDown;
