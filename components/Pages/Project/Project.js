/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import InlineSVG from 'react-inlinesvg';
import Swiper from 'components/Swiper';
import { Star } from 'components/Icons/Star';

function Project({ carousel, id }) {
  return (
    <section id="about" className="lg:h-100-vh w-full flex relative ">
      <div className="w-4-0 min-w-4-0 lg:min-w-6-0 lg:w-6-0 h-auto lg:h-full z-40 bg-red-darker">
        <div className="w-full h-full relative overflow-hidden flex justify-center">
          <div
            className="text-carousel text-carousel-2"
            style={{ transform: `translateY(${carousel}00px)` }}
          />
        </div>
      </div>
      <div className="pb-4-0 overflow-hidden w-full flex lg:items-center justify-center bg-secondary pt-6-0">
        <div className="max-w-90-percent lg:max-w-80-percent xl:max-w-72-percent ">
          <p className="text-[#d6d6d6] leading-3-5 text-1-6 md:text-2-4 lg:text-2-8 tracking-0-84 font-galatea">
            Join Marsleaders and help to shape this new virtual planet. The
            opportunities are limitless, and the benefits are tangible, while
            the future is ours to shape.
          </p>

          <Swiper list={imagesNew} id={id} />

          <p className="text-[#d6d6d6] leading-3-5 text-1-6 md:text-2-4 lg:text-2-8 tracking-0-84 font-galatea mt-4-4">
            This is a game of fiction, however incentives can be redeemed in the
            real world by holding NFTs (non-fungible tokens) on Earth
          </p>
          <div className="hidden lg:flex justify-center mt-3-7">
            <InlineSVG src={Star.src} className="w-2-0 h-2-0 mr-3-0" />
            <InlineSVG src={Star.src} className="w-2-0 h-2-0 mr-3-0" />
            <InlineSVG src={Star.src} className="w-2-0 h-2-0" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;

const imagesNew = [
  '/images/cards/marsleader-1.png',
  '/images/cards/marsleader-2.png',
  '/images/cards/marsleader-3.png',
  '/images/cards/marsleader-4.png',
  '/images/cards/marsleader-5.png',
  '/images/cards/marsleader-6.png',
  '/images/cards/marsleader-7.png',
  '/images/cards/marsleader-8.png',
  '/images/cards/marsleader-9.png',
  '/images/cards/marsleader-10.png',
  '/images/cards/marsleader-11.png',
  '/images/cards/marsleader-12.png',
];
