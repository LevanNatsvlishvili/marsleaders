/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import InlineSVG from 'react-inlinesvg';
import Swiper from 'components/Swiper';
import { Star } from 'components/Icons/Star';

function Project({ carousel }) {
  return (
    <section className="h-100-vh w-full flex relative">
      <div className="min-w-6-0 w-6-0 h-full z-40 bg-red-darker">
        <div className="w-full h-full relative overflow-hidden flex justify-center">
          <div
            className="text-carousel text-carousel-2"
            style={{ transform: `translateY(${carousel}%)` }}
          />
        </div>
      </div>
      <div
        style={{ width: 'calc(100% - 6rem)' }}
        className="w-full flex items-center justify-center bg-secondary pt-6-0"
      >
        <div className="max-w-90-percent lg:max-w-80-percent xl:max-w-72-percent">
          <p className="text-[#d6d6d6] leading-3-5 text-2-4 lg:text-2-8 tracking-0-84 font-galatea">
            <span className="text-red">NFT holders </span>
            and players will be able to obtain various roles with different
            privileges in a game, as well as virtual lands and facilities on the
            newly ‘habitable’
            <span className="text-red"> red planet</span>, to create their own
            reality, states, laws and community
          </p>

          <Swiper list={images} />

          <p className="text-[#d6d6d6] leading-3-5 text-2-4 lg:text-2-8 tracking-0-84 font-galatea mt-4-4">
            Marsleaders is a game of fiction, however, success in this game
            directly converts to success in real life of NFT holders on earth.
          </p>
          <div className="flex justify-center mt-3-7">
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

const images = [
  {
    img1: '/images/cards/marsleader-1.png',
    img2: '/images/cards/marsleader-2.png',
    img3: '/images/cards/marsleader-3.png',
    img4: '/images/cards/marsleader-4.png',
  },
  {
    img1: '/images/cards/marsleader-5.png',
  },
];