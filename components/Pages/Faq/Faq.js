/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Accordion from 'components/Accordion';
import { FAQIcon } from 'components/Icons/Faq';
import InlineSVG from 'react-inlinesvg';

function Faq({ carousel }) {
  return (
    <section className="h-100-vh w-full flex relative overflow-hidden">
      <div className="w-4-0 min-w-4-0 lg:min-w-6-0 lg:w-6-0 h-full z-40 bg-text-primary">
        <div className="w-full h-full relative overflow-hidden flex justify-center">
          <div
            className="text-carousel text-carousel-5"
            style={{ transform: `translateY(${carousel}00px)` }}
          />
        </div>
      </div>
      <div className="w-full h-full flex relative bg-secondary">
        <div className="max-w-[1080px] px-3-0 lg:px-6-0 2xl:px-0 w-full mx-auto mt-6-0 lg:mt-16-5">
          <div className="w-full">
            <div className="flex items-center mb-3-0 lg:mb-8-0">
              <p className="text-white text-2-4 md:text-3-2 leading-3-8 lg:text-4-2 lg:leading-5-0 tracking-1-26 uppercase">
                frequently asked questions
              </p>
              <InlineSVG
                className="ml-auto w-6-0 lg:w-auto"
                src={FAQIcon.src}
              />
            </div>
            <Accordion />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
