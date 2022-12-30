import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import InlineSVG from 'react-inlinesvg';
import PropTypes from 'prop-types';
import { ArrowDown } from 'components/Icons/Arrow';
import { motion } from 'framer-motion';

function Accordion({ faqs }) {
  const [active, setActive] = useState(null);

  const handleClick = (id) => {
    if (active === id) {
      setActive(null);
      return;
    }
    setActive(id);
  };
  return (
    <div>
      {faqs.map((faq, i) => (
        <AccordionItem
          key={i}
          id={i}
          heading={faq.heading}
          content={faq.content}
          active={active}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

function AccordionItem(props) {
  const { heading, active, content, handleClick, id } = props;

  return (
    <div className="my-1-0 h-full">
      <div
        onClick={() => handleClick(id)}
        className={clsx(
          'select-none group px-1-5 hover:bg-[#D0D0D0] bg-white h-6-0 lg:h-8-2 lg:min-h-8-2 border flex items-center overflow-hidden duration-100 cursor-pointer relative',
          active === id && 'bg-red hover:!bg-red'
        )}
      >
        <InlineSVG
          src={ArrowDown.src}
          className={clsx(
            'absolute right-1-2 md:right-3-6 w-1-2 md:w-2-4  md:h-2-4 duration-300',
            {
              '-rotate-180': active === id,
            }
          )}
        />
        <div
          className={clsx(
            'flex items-center text-primary',
            active === id && '!text-white'
          )}
        >
          <p className="min-w-6-0 font-galatea text-2-8 md:text-4-2 lg:text-6-0 leading-7-2 tracking-1-8 leading-2-4 font-700 font-tbc-bold text-inherit">
            0{id + 1}
          </p>
          <p className="group-hover:translate-x-1-0 duration-300 font-galatea font-700 ml-0-8 md:ml-3-5 text-1-4 font md:text-2-8 leading-3-5 tracking-0-84 text-inherit">
            {heading}
          </p>
        </div>
      </div>
      <motion.div
        animate={{
          height: active === id ? 'auto' : 0,
        }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden bg-black"
      >
        <div className=" p-2-5 lg:p-4-5 font-500 text-text-secondary font-tbc-medium text-1-4 leading-2-4">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </motion.div>
    </div>
  );
}

Accordion.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
  faqs: PropTypes.array,
};
Accordion.defaultProps = {
  heading: 'heading',
  children: [],
  faqs: [],
};

export default Accordion;
