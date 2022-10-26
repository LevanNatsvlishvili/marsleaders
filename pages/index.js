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
  const [video, setVideo] = useState('');

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

  useEffect(() => {
    setVideo('./video/marsleaders-banner.mp4');
  }, [loading]);

  return (
    <div className="w-full">
      <Head>
        <title>Marsleaders</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="stylesheet"
          href="https://dollarfontclub.com/projects/6359729765812d1e9c58528a.css"
        ></link> */}
        <link
          rel="stylesheet"
          href="https://dollarfontclub.com/projects/63597ac165812d1e9c58543e.css"
        />
      </Head>

      <section className="h-100-vh w-full flex relative">
        <div className="min-w-6-0 w-6-0 h-full z-40 bg-black ">
          <div className="w-full h-full relative overflow-hidden flex justify-center">
            <div
              className="text-carousel text-carousel-1"
              style={{ transform: `translateY(${carousel}%)` }}
            />
          </div>
        </div>
        <div className="relative w-full h-full">
          {/* <Image
            className="h-full w-full"
            src="/images/cover-image.png"
            alt=""
            layout="fill"
            objectFit="cover"
          /> */}
          <video
            className="w-100-vw h-100-vh object-cover"
            width="100%"
            height="100%"
            autoPlay={true}
            loop={true}
            muted
          >
            <source src="./video/marsleaders-banner.mp4" type="video/mp4" />
          </video>

          <div className="absolute top-50-percent -translate-y-50-percent left-50-percent -translate-x-50-percent w-100-percent">
            <div className="mb-10-0">{!loading && <HeadingGlitch />}</div>

            <ScrollDown loading={loading} currView={currView} />
          </div>
        </div>
      </section>
      <section className="h-100-vh w-full flex relative">
        <div className="min-w-6-0 w-6-0 h-full z-40 bg-red-darker">
          <div className="w-full h-full relative overflow-hidden flex justify-center">
            <div
              className="text-carousel text-carousel-2"
              style={{ transform: `translateY(${carousel}%)` }}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="h-50-percent text-primary flex relative">
            <div className="w-fit h-full bg-red flex justify-center flex-col px-2-8 lg:px-6-0 xl:pl-14-0 xl:pr-11-6 pt-6-0">
              <div className="flex items-center">
                <InlineSVG
                  className="h-5-0 lg:h-7-0 lg:w-3-8 hidden lg:block"
                  src={Medal.src}
                />
                <p className="dfc-blonde text-2-8 lg:text-4-2 text-text-primary leading-3-2 lg:leading-5-0 tracking-1-19 ml-0 lg:ml-2-7">
                  What is Marsleaders
                </p>
              </div>

              <div className="h-0-2 mt-1-6 mb-2-8 lg:mt-2-1 lg:mb-3-7 w-full bg-red-dark" />

              <p className="text-text-secondary text-2-2 lg:text-3-2 leading-3-9 tracking-0-96">
                Marsleaders - is a play-&-earn blockchain based metaverse world
                life simulation game, giving humanity an opportunity to start
                over, from a blank red soil, to base a new virtual civilization
                on Mars.
              </p>
            </div>
            <div className="min-w-50-vh w-50-vh bg-red-darker h-full flex items-center justify-center py-11-0">
              <InlineSVG src={LogoLg.src} className="h-full mt-6-0" />
            </div>
          </div>
          <div className="h-50-percent text-primary  flex items-center relative">
            <div className="relative h-full group  ">
              <InlineSVG
                src={MarsleaderHover.src}
                className="opacity-0 group-hover:opacity-100 duration-300 h-full hidden xl:block"
              />
              <img
                src="/images/marsleader.png"
                alt=""
                className="xl:absolute xl:top-50-percent xl:left-50-percent xl:-translate-y-50-percent xl:-translate-x-50-percent h-full py-4-0 px-2-8"
                layout="intrinsic "
              />
            </div>
            <p className="text-text-primary text-3-6 leading-6-0 tracking-3-6 font-blonde w-60-percent lg:w-45-percent ">
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
      <section className="h-100-vh w-full flex relative">
        <div className="min-w-6-0 w-6-0 h-full z-40 bg-red-darker">
          <div className="w-full h-full relative overflow-hidden flex justify-center">
            <div
              className="text-carousel text-carousel-2"
              style={{ transform: `translateY(${carousel}%)` }}
            />
          </div>
        </div>
        <div
          style={{ width: 'calc(100% - 6rem)' }}
          className="w-full flex items-center justify-center bg-secondary mt-6-0"
        >
          <div className="max-w-90-percent lg:max-w-80-percent xl:max-w-72-percent">
            <p className="text-[#d6d6d6] leading-3-5 text-2-4 lg:text-2-8 tracking-0-84 font-galatea">
              <span className="text-red">NFT holders </span>
              and players will be able to obtain various roles with different
              privileges in a game, as well as virtual lands and facilities on
              the newly ‘habitable’
              <span className="text-red"> red planet</span>, to create their own
              reality, states, laws and community
            </p>

            <Swiper list={images} />

            <p className="text-[#d6d6d6] leading-3-5 text-2-4 lg:text-2-8 tracking-0-84 font-galatea mt-4-4">
              Marsleaders is a game of fiction, however, success in this game
              directly converts to success in real life of NFT holders on earth.
            </p>
            <div className="flex justify-center mt-3-7">
              <InlineSVG src={Star.src} className="w-2-0 h-2-0 mr-3-0" />
              <InlineSVG src={Star.src} className="w-2-0 h-2-0 mr-3-0" />
              <InlineSVG src={Star.src} className="w-2-0 h-2-0" />
            </div>
          </div>
        </div>
      </section>
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
                <img
                  className="w-full h-full"
                  src="/images/shuttle.png"
                  alt=""
                />
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
