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

function BenefitsComponent({ carousel }) {
  const [value, setValue] = useState('citizens');

  return (
    <section className="h-100-vh w-full flex relative overflow-hidden bg-red-dark">
      <div className="min-w-6-0 w-6-0 h-full z-40 bg-black">
        <div className="w-full h-full relative overflow-hidden flex justify-center">
          <div
            className="text-carousel text-carousel-4"
            style={{ transform: `translateY(${carousel}00px)` }}
          />
        </div>
      </div>
      <div className="w-full h-full flex relative bg-red mt-6-0 flex-col">
        <div className="h-25-vh bg-red-dark w-full flex items-center pl-9-0 pr-14-0">
          <div className="flex items-center">
            <InlineSVG src={Benefits.src} />
            <p className="ml-2-6 text-4-2 text-text-primary leading-5-0 tracking-1-26">
              Benefits
            </p>
          </div>
          <div className="ml-auto">
            <Tabs active={value} onChange={setValue} />
          </div>
        </div>
        <div className="h-75-vh w-full flex pl-9-0 py-4-0 pr-14-0 flex-col">
          <div className="w-full">
            <p className="text-3-2 font-galatea leading-3-9 tracking-0-96 text-text-secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
          </div>
          {value === 'citizens' && (
            <div className="grid grid-cols-12 gap-x-1-5 mt-2-2">
              <div className="col-span-4">
                <div className="h-full bg-red-dark flex items-center flex-col justify-center py-3-7 px-8-6">
                  <InlineSVG
                    className="h-12-0 w-12-0"
                    src={BenefitsPrize.src}
                  />
                  <p className="text-center text-2-4 leading-3-2 tracking-0-78 text-white mt-2-2">
                    Win a share from the $500k competition prize pool
                  </p>
                </div>
              </div>
              <div className="col-span-4">
                <div className="h-full bg-red-dark flex items-center flex-col justify-center py-3-7 px-8-6">
                  <InlineSVG className="h-12-0 w-12-0" src={BenefitsLand.src} />
                  <p className="text-center text-2-4 leading-3-2 tracking-0-78 text-white mt-2-2">
                    Free land on the Marsleaders game
                  </p>
                </div>
              </div>
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
          )}
          <div className="flex justify-center my-auto">
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
