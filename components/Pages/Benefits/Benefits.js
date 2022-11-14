/* eslint-disable react/no-unescaped-entities */
import InlineSVG from 'react-inlinesvg';
import { Star } from 'components/Icons/Star';
import {
  Benefits,
  BenefitsLand,
  BenefitsPassport,
  BenefitsPresident1,
  BenefitsPresident2,
  BenefitsPresident3,
  BenefitsPresident4,
  BenefitsPresident5,
  BenefitsPrize,
} from 'components/Icons/Benefits';
import Tabs from 'components/Tabs';
import { useState } from 'react';
import BenefitsSwiper from 'components/BenefitsSwiper';

const citizens = [
  {
    content: 'Win a share from the $500k competition prize pool',
    icon: BenefitsPrize,
  },
  { content: 'Free land on the Marsleaders game', icon: BenefitsLand },
  {
    content: 'MarsPassport which unlocks benefits in the game',
    icon: BenefitsPassport,
  },
];

function BenefitsComponent({ carousel }) {
  const [value, setValue] = useState('citizens');

  return (
    <section className="h-100-vh w-full flex relative overflow-hidden bg-red-dark">
      <div className="w-4-0 min-w-4-0 lg:min-w-6-0 lg:w-6-0 h-full z-40 bg-black">
        <div className="w-full h-full relative overflow-hidden flex justify-center">
          <div
            className="text-carousel text-carousel-4"
            style={{ transform: `translateY(${carousel}00px)` }}
          />
        </div>
      </div>
      <div className="w-full h-full flex relative bg-red mt-4-0 lg:mt-6-0 flex-col">
        <div className="h-15-vh sm:h-25-vh bg-red-dark justify-center sm:justify-base w-full flex items-center flex-col md:flex-row md:pl-9-0 md:pr-14-0">
          <div className="hidden sm:flex items-center">
            <InlineSVG src={Benefits.src} className="md:w-auto w-6-0" />
            <p className="ml-2-6 text-3-2 md:text-4-2 text-text-primary leading-5-0 tracking-1-26">
              Benefits
            </p>
          </div>
          <div className="md:ml-auto w-full sm:w-auto pr-4-0 xss:pl-2-0 xss:pr-6-0 xsm:pl-4-0 xsm:pr-8-0 md:px-0">
            <Tabs active={value} onChange={setValue} />
          </div>
        </div>
        <div className="h-15-vh sm:h-75-vh w-full flex py-4-0 pl-2-0 pr-6-0 md:pl-4-0 md:pr-8-0 md:pl-9-0 xsm:pl-4-0 xsm:pr-8-0 md:pr-14-0 flex-col">
          <BenefitsSwiper list={citizens} />
          {/* {value === 'citizens' && (
            <div className="grid grid-cols-12 gap-x-1-5 mt-2-2">

              
              <div className="col-span-4">
                <div className="h-full bg-red-dark flex items-center flex-col justify-center py-3-7 px-8-6">
                  <InlineSVG
                    className="h-12-0 w-12-0"
                    src={BenefitsPassport.src}
                  />
                  <p className="text-center text-2-4 leading-3-2 tracking-0-78 text-white mt-2-2">
                    MarsPassport which unlocks benefits in the game
                  </p>
                </div>
              </div>
            </div>
          )}
          {value === 'presidents' && (
            <div className="grid grid-cols-5 gap-x-1-5 mt-2-2">
              <div className="">
                <div className="h-full bg-red-dark flex items-center flex-col justify-center py-3-7 px-2-6">
                  <InlineSVG
                    className="h-12-0 w-12-0"
                    src={BenefitsPresident1.src}
                  />
                  <p className="text-center text-2-4 leading-3-2 tracking-0-78 text-white mt-2-2">
                    More percentage from the prize pool
                  </p>
                </div>
              </div>
              <div className="">
                <div className="h-full bg-red-dark flex items-center flex-col justify-center py-3-7 px-2-6">
                  <InlineSVG
                    className="h-12-0 w-12-0"
                    src={BenefitsPresident2.src}
                  />
                  <p className="text-center text-2-4 leading-3-2 tracking-0-78 text-white mt-2-2">
                    Country Leadership
                  </p>
                </div>
              </div>
              <div className="">
                <div className="h-full bg-red-dark flex items-center flex-col justify-center py-3-7 px-2-6">
                  <InlineSVG
                    className="h-12-0 w-12-0"
                    src={BenefitsPresident3.src}
                  />
                  <p className="text-center text-2-4 leading-3-2 tracking-0-78 text-white mt-2-2">
                    3x Personal Free Land
                  </p>
                </div>
              </div>
              <div className="">
                <div className="h-full bg-red-dark flex items-center flex-col justify-center py-3-7 px-2-6">
                  <InlineSVG
                    className="h-12-0 w-12-0"
                    src={BenefitsPresident4.src}
                  />
                  <p className="text-center text-2-4 leading-3-2 tracking-0-78 text-white mt-2-2">
                    Management of goverment lands
                  </p>
                </div>
              </div>
              <div className="">
                <div className="h-full bg-red-dark flex items-center flex-col justify-center py-3-7 px-2-6">
                  <InlineSVG
                    className="h-12-0 w-12-0"
                    src={BenefitsPresident5.src}
                  />
                  <p className="text-center text-2-4 leading-3-2 tracking-0-78 text-white mt-2-2">
                    Personal twitter account of Marsleaders President
                  </p>
                </div>
              </div>
            </div>
          )} */}
          <div className="lg:flex hidden justify-center my-auto">
            <InlineSVG src={Star.src} className="w-2-0 h-2-0 mr-3-0" />
            <InlineSVG src={Star.src} className="w-2-0 h-2-0 mr-3-0" />
            <InlineSVG src={Star.src} className="w-2-0 h-2-0" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsComponent;
