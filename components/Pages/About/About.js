/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import InlineSVG from 'react-inlinesvg';
import { Medal } from 'components/Icons/Medal';
import { LogoLg } from 'components/Icons/Logo';
import { MarsleaderHover } from 'components/Icons/MarsleaderHover';

function About({ carousel }) {
  return (
    <section className="h-100-vh w-full flex relative section">
      <div className="w-4-0 min-w-4-0 lg:min-w-6-0 lg:w-6-0 h-full z-40 bg-red-darker">
        <div className="w-full h-full relative overflow-hidden flex justify-center">
          <div
            className="text-carousel text-carousel-2"
            style={{ transform: `translateY(${carousel}00px)` }}
          />
        </div>
      </div>
      <div className="w-full">
        <div className="h-30-percent lg:h-50-percent text-primary flex relative">
          <div className="w-fit 4k:w-full h-full bg-red flex md:justify-center flex-col px-2-8 lg:px-6-0 xl:pl-14-0 xl:pr-11-6 pt-6-0">
            <div className="flex items-center">
              <InlineSVG
                className="h-5-0 lg:h-7-0 lg:w-3-8 hidden lg:block"
                src={Medal.src}
              />
              <p className="font-techno text-2-8 lg:text-4-2 text-text-primary leading-3-2 lg:leading-5-0 tracking-1-19 ml-0 lg:ml-2-7">
                What is Marsleaders
              </p>
            </div>

            <div className="h-0-2 mt-1-0 xss:mt-1-6 mb-1-4 lg:mb-2-8 lg:mt-2-1 lg:mb-3-7 w-full bg-red-dark" />

            <p className="font-galatea text-text-secondary text-1-6 xss:text-2-2 lg:text-3-2 leading-3-9 tracking-0-96">
              Marsleaders - is a play-&-earn blockchain based metaverse world
              life simulation game, giving humanity an opportunity to start
              over, from a blank red soil, to base a new virtual civilization on
              Mars.
            </p>
          </div>
          <div className="hidden lg:flex min-w-50-vh w-50-vh bg-red-darker h-full items-center justify-center py-11-0">
            <InlineSVG src={LogoLg.src} className="h-full mt-6-0" />
          </div>
        </div>
        <div className="h-70-percent lg:h-50-percent text-primary flex-col lg:flex-row flex items-center relative p-3-0 lg:px-0">
          <div className="relative h-60-percent lg:h-full group 3xl:ml-7-0 lg:ml-3-0">
            <InlineSVG
              src={MarsleaderHover.src}
              className="opacity-0 group-hover:opacity-100 duration-300 h-full hidden xl:block"
            />
            <img
              src="/images/cards/marsleader-1.png"
              alt=""
              className="xl:absolute xl:top-50-percent xl:left-50-percent xl:-translate-y-50-percent xl:-translate-x-50-percent h-full lg:py-4-0 lg:px-2-8"
              layout="intrinsic "
            />
          </div>
          <p className="font-techno mt-2-0 xs:mt-4-0 text-center lg:text-left text-text-primary text-2-2 leading-3-2 lg:text-3-6 lg:leading-6-0 tracking-3-6 font-blonde lg:w-60-percent lg:w-45-percent ">
            The Age of Exploration might be over for earth, but it’s only the
            beginning <span className="text-red">for Mars</span>
          </p>

          <img
            className="h-full absolute -z-10 right-0 top-0 hidden lg:block"
            src="/images/galaxy.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default About;
