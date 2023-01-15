/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import InlineSVG from 'react-inlinesvg';
import { Team } from 'components/Icons/Team';
import TeamSwiper from 'components/TeamSwiper';

function Teams({ carousel }) {
  return (
    <section id="team" className="md:h-100-vh w-full flex relative">
      <div className="w-4-0 min-w-4-0 lg:min-w-6-0 lg:w-6-0 h-auto md:h-full z-40 bg-red-darker">
        <div className="w-full h-full relative overflow-hidden flex justify-center">
          <div
            className="text-carousel text-carousel-5"
            style={{ transform: `translateY(${carousel}00px)` }}
          />
        </div>
      </div>
      <div className="pb-6-0 max-w-80-percent mx-auto bg-secondary pt-6-0">
        <div className="flex items-center w-full mx-auto mt-2-0  lg:mt-6-0">
          <InlineSVG src={Team.src} className="w-6-0 h-6-0" />
          <p className="font-techno ml-2-6 text-3-2 md:text-4-2 text-text-primary leading-5-0 tracking-1-26">
            OUR TEAM
          </p>
        </div>
        <div className="w-full">
          <TeamSwiper list={imagesNew} />
        </div>
      </div>
    </section>
  );
}

export default Teams;

const imagesNew = [
  {
    img: '/images/team/1.png',
    position: 'Founder',
    name: 'Effener',
  },
  {
    img: '/images/team/2.png',
    position: 'Lead Dev',
    name: 'Fella',
  },
  {
    img: '/images/team/3.png',
    position: 'Creative director / Mars Council',
    name: 'SpaceGirl',
  },
  {
    img: '/images/team/4.png',
    position: 'Marketing / Mars council',
    name: 'Blairwaldorf',
  },
  {
    img: '/images/team/5.png',
    position: 'Artist',
    name: 'Xesus',
  },
];
