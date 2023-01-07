/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import useStore from 'context';
import { useEffect, useState } from 'react';
import Welcome from 'components/Pages/Welcome';
import About from 'components/Pages/About';
import Project from 'components/Pages/Project';
import Timeline from 'components/Pages/Timeline';
import BenefitsComponent from 'components/Pages/Benefits/Benefits';
import Faq from 'components/Pages/Faq';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper';
import { Logo } from 'components/Icons/Logo';
import Team from 'components/Pages/Team';

export default function Home() {
  const { currView, setCurrView, setSwiperRef } = useStore();
  const [carousel, setCarousel] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (carousel > 90) {
        setCarousel(0);
        return;
      }
      setCarousel(carousel - 1);
    }, 300);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currView]);

  const handleSlideChange = (e) => {
    setCurrView(e.activeIndex);
  };

  const swiperSettigns = {
    mousewheel: {
      releaseOnEdges: true,
    },
    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
      releaseOnEdges: true,
      thresholdDelta: 50,
    },
    allowTouchMove: true,
    breakpoints: {
      768: {
        allowTouchMove: false,
      },
    },
    onSlideChange: handleSlideChange,
    onSwiper: setSwiperRef,
  };

  return (
    <div className="w-full">
      <Head>
        <title>Marsleaders</title>
        <meta
          name="description"
          content="Marsleaders - is a play-&-earn blockchain based metaverse world life simulation game, giving humanity an opportunity to start over, from a blank red soil, to base a new virtual civilization on Mars."
        />
        <meta
          name="og:description"
          content="Marsleaders - is a play-&-earn blockchain based metaverse world life simulation game, giving humanity an opportunity to start over, from a blank red soil, to base a new virtual civilization on Mars."
        />
        <meta name="og:title" content="Marsleaders" />
        <link rel="icon" href={Logo.src} />
        <meta property="og:url" key="ogUrl" content="https://marsleaders.com" />

        <meta
          property="og:image"
          key="ogImage"
          content="/images/cover-image.png"
        />
      </Head>
      <div className="lg:block hidden h-full">
        <Swiper
          {...swiperSettigns}
          modules={[Mousewheel]}
          className="mySwiper h-full"
        >
          <SwiperSlide className="!h-full">
            <Welcome carousel={carousel} />
          </SwiperSlide>
          <SwiperSlide className="!h-full">
            <About carousel={carousel} />
          </SwiperSlide>
          <SwiperSlide className="!h-full">
            <Project carousel={carousel} />
          </SwiperSlide>
          <SwiperSlide className="!h-full">
            <Timeline carousel={carousel} />
          </SwiperSlide>
          <SwiperSlide className="!h-full">
            <BenefitsComponent carousel={carousel} />
          </SwiperSlide>
          <SwiperSlide className="!h-full">
            <Team carousel={carousel} />
          </SwiperSlide>
          <SwiperSlide className="!h-full">
            <Faq carousel={carousel} />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="lg:hidden block bg-secondary">
        <Welcome carousel={carousel} />
        <About carousel={carousel} />
        <Project carousel={carousel} />
        <Timeline carousel={carousel} />
        <BenefitsComponent carousel={carousel} />
        <Team carousel={carousel} />
        <Faq carousel={carousel} />
      </div>

      <style jsx global>
        {`
          .swiper {
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </div>
  );
}
