/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import InlineSVG from 'react-inlinesvg';
import useStore from 'context';
import { useEffect, useState } from 'react';
import { Medal } from 'components/Icons/Medal';
import { LogoLg } from 'components/Icons/Logo';
import { MarsleaderHover } from 'components/Icons/MarsleaderHover';
import Swiper from 'components/Swiper';
import { Star } from 'components/Icons/Star';
import { Rocket } from 'components/Icons/Rocket';
import HeadingGlitch from 'components/Animations/HeadingGlitch';
import { motion } from 'framer-motion';
import { ScrollArrow, ScrollMouse } from 'components/Icons/Scroll';
import clsx from 'clsx';
import ScrollDown from 'components/Animations/ScrollDown';
import {
  Benefits,
  BenefitsLand,
  BenefitsPassport,
  BenefitsPrize,
} from 'components/Icons/Benefits';
import Tabs from 'components/Tabs';
import Welcome from 'components/Pages/Welcome';
import About from 'components/Pages/About';
import Project from 'components/Pages/Project';

const images = [
  {
    img1: '/images/marsleader.png',
    img2: '/images/marsleader.png',
    img3: '/images/marsleader.png',
    img4: '/images/marsleader.png',
  },
  {
    img1: '/images/marsleader.png',
    img2: '/images/marsleader.png',
    img3: '/images/marsleader.png',
    img4: '/images/marsleader.png',
  },
  {
    img1: '/images/marsleader.png',
    img2: '/images/marsleader.png',
    img3: '/images/marsleader.png',
    img4: '/images/marsleader.png',
  },
];

function Timeline({ carousel }) {
  const { currView } = useStore();
  const [rocket, setRocket] = useState(0);
  const [planets, setPlanets] = useState(0);

  useEffect(() => {
    if (currView !== 2) {
      setTimeout(() => {
        if (planets !== 0) {
          setPlanets(0);
        }
        if (rocket !== (timeline.length + 1) * 10) {
          setRocket((timeline.length + 1) * 10);
        }
      }, 2000);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currView]);

  useEffect(() => {
    setRocket((timeline.length + 1) * 10);

    setPlanets(0);
  }, []);

  const handleRocket = () => {
    if (rocket - 18.5 < -21) {
      return;
    }
    setRocket(rocket - 18.5);
    setPlanets(planets + 50);
  };

  const TimelineDot = (props) => {
    const { date, content } = props;
    return (
      <div onClick={handleRocket} className="flex cursor-pointer">
        <div className="min-w-4-6 w-4-6 h-4-6 bg-white rounded-50-percent flex items-center justify-center">
          <div className="bg-red rounded-50-percent w-2-1 h-2-1"></div>
        </div>
        <div className="ml-3-1">
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
            style={{ transform: `translateY(${carousel}%)` }}
          />
        </div>
      </div>
      <div className="w-full h-full flex relative">
        <div className="absolute -translate-x-70-percent -translate-y-70-percent left-0 top-0">
          <motion.div
            transition={{ ease: 'easeOut', duration: 2 }}
            animate={{
              x: planets,
              y: planets,
            }}
          >
            <img className="" src="/images/mars.png" alt="" />
          </motion.div>
        </div>
        <div className="h-90-percent overflow-hidden m-auto relative">
          <div className="w-50-percent mx-auto text-text-primary  h-full relative">
            <div className="absolute rounded-50-percent -mt-0-8 h-17-5 -left-3-0 top-50-percent z-10 -translate-y-80-percent top-50-percent">
              <img className="w-full h-full" src="/images/shuttle.png" alt="" />
            </div>
            <div
              style={{
                minHeight: `calc(20%*${timeline.length})`,
                transform: `translateY(calc(${rocket}% * -1))`,
              }}
              className="h-full duration-1000 pb-10-percent"
            >
              <div
                style={{ height: `calc((${timeline.length} * 20%) + 20%)` }}
                className="h-full w-0-2 bg-white absolute left-2-3 -z-10 -mt-30-percent"
              />
              {timeline.map((checkpoint, i) => (
                <div key={i} className="h-20-percent flex items-center">
                  <TimelineDot
                    content={checkpoint.content}
                    date={checkpoint.date}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute translate-x-30-percent translate-y-30-percent right-0 bottom-0">
          <motion.div
            transition={{ ease: 'easeOut', duration: 2 }}
            animate={{
              x: planets,
              y: planets,
            }}
          >
            <img className="" src="/images/earth.png" alt="" />
          </motion.div>
        </div>
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
