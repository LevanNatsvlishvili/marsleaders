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
const presidents = [
  {
    content: 'More percentage from the prize pool',
    icon: BenefitsPresident1,
  },
  {
    content: 'Country Leadership',
    icon: BenefitsPresident2,
  },
  {
    content: '3x Personal Free Land',
    icon: BenefitsPresident3,
  },
  {
    content: 'Management of goverment lands',
    icon: BenefitsPresident4,
  },
  {
    content: 'Personal twitter account of Marsleaders President',
    icon: BenefitsPresident5,
  },
];

function BenefitsComponent({ carousel }) {
  const [value, setValue] = useState('citizens');

  return (
    <section
      id="benefits"
      className="h-100-vh w-full flex relative overflow-hidden bg-red-dark"
    >
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
            <p className="font-techno ml-2-6 text-3-2 md:text-4-2 text-text-primary leading-5-0 tracking-1-26">
              Benefits
            </p>
          </div>
          <div className="md:ml-auto w-full sm:w-auto pr-4-0 xss:pl-2-0 xss:pr-6-0 xsm:pl-4-0 xsm:pr-8-0 md:px-0">
            <Tabs active={value} onChange={setValue} />
          </div>
        </div>
        <div className="h-15-vh sm:h-75-vh w-full flex py-4-0 pl-2-0 pr-6-0 md:pl-4-0 md:md:pl-9-0 xsm:pl-4-0 xsm:pr-8-0 md:pr-14-0 flex-col">
          <p className="font-galatea text-text-secondary text-1-6 xss:text-2-2 lg:text-3-2 leading-3-9 tracking-0-96">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </p>

          <div className={value === 'citizens' ? 'block' : 'hidden'}>
            <BenefitsSwiper list={citizens} />
          </div>
          <div className={value === 'presidents' ? 'block' : 'hidden'}>
            <BenefitsSwiper list={presidents} />
          </div>

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
