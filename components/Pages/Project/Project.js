/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import InlineSVG from 'react-inlinesvg';
import Swiper from 'components/Swiper';
import { Star } from 'components/Icons/Star';

function Project({ carousel }) {
  return (
    <section id="about2" className="md:h-100-vh w-full flex relative ">
      <div className="w-4-0 min-w-4-0 lg:min-w-6-0 lg:w-6-0 h-auto md:h-full z-40 bg-red-darker">
        <div className="w-full h-full relative overflow-hidden flex justify-center">
          <div
            className="text-carousel text-carousel-2"
            style={{ transform: `translateY(${carousel}00px)` }}
          />
        </div>
      </div>
      <div className="pb-4-0 overflow-hidden w-full flex md:items-center justify-center bg-secondary pt-6-0">
        <div className="max-w-90-percent lg:max-w-80-percent xl:max-w-72-percent ">
          <p className="text-[#d6d6d6] leading-3-5 text-1-6 md:text-2-4 lg:text-2-8 tracking-0-84 font-galatea">
            <span className="text-red">NFT holders </span>
            and players will be able to obtain various roles with different
            privileges in a game, as well as virtual lands and facilities on the
            newly ‘habitable’
            <span className="text-red"> red planet</span>, to create their own
            reality, states, laws and community
          </p>

          <Swiper list={imagesNew} />

          <p className="text-[#d6d6d6] leading-3-5 text-1-6 md:text-2-4 lg:text-2-8 tracking-0-84 font-galatea mt-4-4">
            Marsleaders is a game of fiction, however, success in this game
            directly converts to success in real life of NFT holders on earth.
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
