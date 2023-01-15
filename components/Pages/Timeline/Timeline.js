/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import TimelineDesktop from './TimelineDesktop';
import TimelineMobile from './TimelineMobile';

function Timeline({ carousel }) {
  return (
    <section
      id="roadmap"
      className="h-100-vh w-full flex relative overflow-hidden"
    >
      <div className="w-4-0 min-w-4-0 lg:min-w-6-0 lg:w-6-0 h-full z-40 bg-text-primary">
        <div className="w-full h-full relative overflow-hidden flex justify-center">
          <div
            className="text-carousel text-carousel-3"
            style={{ transform: `translateY(${carousel}00px)` }}
          />
        </div>
      </div>
      <div className="w-full h-full hidden lg:block">
        <TimelineDesktop timeline={timeline} />
      </div>
      <div className="w-full h-full block lg:hidden">
        <TimelineMobile timeline={timeline} />
      </div>
    </section>
  );
}

const timeline = [
  {
    date: 'December 2023',
    content: `
    ✧ Marsleaders official launch`,
  },
  {
    date: 'November 2023',
    content: `✧ Game utility sales
    ✧ Announcing the season II, which takes off on January 2024
    `,
  },
  {
    date: 'October 2023',
    content: `✧ End of the first season
    ✧ Top countries NFT holders of the leaderboard will be awarded from the first season prize pool`,
  },
  {
    date: 'September 2023',
    content: `✧ Opening BETA version of Marsleaders
    ✧ Announcing game utility sales (vehicles, businesses, etc.)`,
  },
  {
    date: 'April 2023',
    content: `✧ First community party in New York ; Amsterdam
    ✧ Marsleaders lands sale
    ✧ Launching first season game with $500k prize pool which will be held in Discord`,
  },
  {
    date: 'February 2023',
    content: `✧ Starting development of Marsleaders game
    ✧ Launching first pre-season warmup competition with $25k prize pool which will be held in Discord
    ✧ Announcing Marscoin `,
  },
  {
    date: 'January 2023',
    content: `✧ First sales launch of "citizens" collection (1950 NFTs)
    ✧ Presidents collection sale with auction system (195 NFTs)`,
  },
  {
    date: 'September 2022 - January 2023',
    content: `
    ✧ Community gathering
✧ Contests
✧ Whitelist giveaways`,
  },
];

export default Timeline;
