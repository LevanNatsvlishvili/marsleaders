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
import Timeline from 'components/Pages/Timeline';
import BenefitsComponent from 'components/Pages/Benefits/Benefits';

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

export default function Home() {
  const { currView, loading } = useStore();
  const [carousel, setCarousel] = useState(0);
  const [rocket, setRocket] = useState(0);
  const [planets, setPlanets] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCarousel(carousel - 2);
    }, 1200);

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
    console.log(rocket);
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
    <div className="w-full">
      <Head>
        <title>Marsleaders</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          href="https://dollarfontclub.com/projects/635ea1b065812d1e9c58620d.css"
        />
      </Head>

      <Welcome carousel={carousel} />

      <About carousel={carousel} />

      <Project carousel={carousel} />

      <Timeline carousel={carousel} />

      <BenefitsComponent carousel={carousel} />

      <section className="h-100-vh w-full flex relative overflow-hidden">
        <div className="min-w-6-0 w-6-0 h-full z-40 bg-text-primary">
          <div className="w-full h-full relative overflow-hidden flex justify-center">
            <div
              className="text-carousel text-carousel-3"
              style={{ transform: `translateY(${carousel}%)` }}
            />
          </div>
        </div>
        <div className="w-full h-full flex relative">123</div>
      </section>
    </div>
  );
}

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
