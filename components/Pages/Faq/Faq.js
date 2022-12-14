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
        <div className="max-w-[1080px] px-3-0 lg:px-6-0 2xl:px-0 w-full mx-auto mt-6-0 lg:mt-10-0">
          <div className="w-full">
            <div className="flex items-center mb-3-0 lg:mb-4-0">
              <p className="font-techno text-white text-2-4 md:text-3-2 leading-3-8 lg:text-4-2 lg:leading-5-0 tracking-1-26 uppercase">
                frequently asked questions
              </p>
              <InlineSVG
                className="ml-auto w-6-0 lg:w-auto"
                src={FAQIcon.src}
              />
            </div>
            <Accordion faqs={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}

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
    heading: 'What will be the price of each piece?',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    heading: 'How many pieces will be in the collection?',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    heading: 'How high will the gas fee be?',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    heading: 'How many NFT can I mint?',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
];

export default Faq;
