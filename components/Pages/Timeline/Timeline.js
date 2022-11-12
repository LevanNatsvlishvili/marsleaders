/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import useStore from 'context';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import InlineSVG from 'react-inlinesvg';
import { ControlPanel } from 'components/Icons/ControlPanel';
import { ArrowDownV2 } from 'components/Icons/Arrow';
import TimelineDesktop from './TimelineDesktop';
import TimelineMobile from './TimelineMobile';

function Timeline({ carousel }) {
  const { currView } = useStore();
  const [rocket, setRocket] = useState(0);
  const [planets, setPlanets] = useState(0);
  const [dot, setDot] = useState(timeline.length - 2);

  useEffect(() => {
    if (currView !== 2) {
      setTimeout(() => {
        if (planets !== 0) {
          setPlanets(0);
        }
        if (rocket !== (timeline.length + 1) * 10) {
          setRocket((timeline.length + 3) * 10);
        }
        if (dot !== timeline.length - 1) {
          setDot(timeline.length - 1);
        }
      }, 2000);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currView]);

  useEffect(() => {
    setRocket((timeline.length + 3) * 10);

    setPlanets(0);
    setDot(timeline.length - 1);
  }, []);

  const handleRocket = () => {
    if (rocket - 18.5 < -21) {
      return;
    }
    setDot(dot - 1);
    setRocket(rocket - 18.5);
    setPlanets(planets + 50);
  };
  const handleRocketDown = () => {
    if (rocket >= 110) {
      return;
    }
    setDot(dot + 1);
    setRocket(rocket + 18.5);
    setPlanets(planets - 50);
  };

  const TimelineDot = (props) => {
    const { date, content, index } = props;

    return (
      <div onClick={handleRocket} className="flex cursor-pointer mt-10-0 z-0">
        <motion.div
          animate={{
            opacity: index === dot ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={clsx(
              'min-w-4-6 w-4-6 h-4-6 bg-white rounded-50-percent flex items-center justify-center duration-300'
            )}
          >
            <div className="bg-red rounded-50-percent w-2-1 h-2-1"></div>
          </div>
        </motion.div>

        <div className="ml-4-0">
          <p className="text-2-2 font-ranger leading-2-6 tracking-4-4">
            {date}
          </p>
          <p className="mt-1-2 text-2-2 font-galatea leading-2-7 tracking-4-4">
            {content}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="h-100-vh w-full flex relative overflow-hidden">
      <div className="min-w-6-0 w-6-0 h-full z-40 bg-text-primary">
        <div className="w-full h-full relative overflow-hidden flex justify-center">
          <div
            className="text-carousel text-carousel-3"
            style={{ transform: `translateY(${carousel}00px)` }}
          />
        </div>
      </div>
      <div className="w-full h-full hidden lg:block">
        <TimelineDesktop />
      </div>
      <div className="w-full h-full block lg:hidden">
        <TimelineMobile />
      </div>
    </section>
  );
}

export default Timeline;

const timeline = [
  {
    date: 'December 2023',
    content: `MarsLeaders Official Launch`,
  },
  {
    date: 'Novebmer 2023',
    content: `Game utility sales
      Announcing the season II`,
  },
  {
    date: 'September 2023',
    content: `Opening BETA version of MarsLeaders
      Announcing game utility sales (vehicles, businesses)`,
  },
  {
    date: 'April 2023',
    content: `First community party in New York
      First community party in Amsterdam
      Marsleaders lands sale`,
  },
  {
    date: 'March 2023',
    content: `Announcing metaverse lands on sale
      Announcing whitelist contests for the land sales
      `,
  },
  {
    date: 'Ferbuary 2023',
    content: `MarsLeaders game development
      First Season competition launch on Discord with 500k prize pool `,
  },
  {
    date: 'January 2023',
    content: `Announcing MarsCoin
      First sales launch of Citizen collection (9750 NFT’s)
      Presidents sales with auction system (195 NFT’s)
      Contest Winner’s Awards`,
  },
  {
    date: 'September-January 2022',
    content: 'Contests with prizes Sneak peeks Whitelist giveaways',
  },
];
