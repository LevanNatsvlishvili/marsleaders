import clsx from 'clsx';
import React, { useState } from 'react';
import InlineSVG from 'react-inlinesvg';
import PropTypes from 'prop-types';
import { ArrowDown } from 'components/Icons/Arrow';
import { motion } from 'framer-motion';

const faqs = [
  {
    heading: 'What are the future plans?',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    heading: 'How can I get whitelisted?',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    heading: 'How can I get whitelisted?',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    heading: 'How can I get whitelisted?',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
];

function Accordion(props) {
  const { heading, children } = props;
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
          'bg-white h-8-2 px-1-5 min-h-8-2 border flex items-center overflow-hidden duration-1000 cursor-pointer relative'
        )}
      >
        <InlineSVG
          src={ArrowDown.src}
          className={clsx('absolute right-3-6 w-2-4 h-2-4 duration-300', {
            '-rotate-180': active === id,
          })}
        />
        <div className={clsx('flex items-center')}>
          <p className="font-ranger text-6-0 leading-7-2 tracking-1-8 leading-2-4 font-700 font-tbc-bold text-primary">
            0{id + 1}
          </p>
          <p className="ml-3-5 text-2-8 leading-3-5 tracking-0-84 text-secondary font-galatea-bold">
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
        <div className="p-4-5 font-500 text-text-secondary font-tbc-medium text-1-4 leading-2-4">
          {content}
        </div>
      </motion.div>
    </div>
  );
}

Accordion.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};
Accordion.defaultProps = {
  heading: 'heading',
  children: [],
};

export default Accordion;
