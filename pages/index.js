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
import Accordion from 'components/Accordion';
import Faq from 'components/Pages/Faq';

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
  const { currView } = useStore();
  const [carousel, setCarousel] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCarousel(carousel - 1);
    }, 800);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currView]);

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

      <Faq carousel={carousel} />
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
