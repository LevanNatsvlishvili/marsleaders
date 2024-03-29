/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import useStore from 'context';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import InlineSVG from 'react-inlinesvg';
import { ControlPanel } from 'components/Icons/ControlPanel';
import { ArrowDownV2 } from 'components/Icons/Arrow';

function TimelineDesktop({ timeline }) {
  const { currView } = useStore();
  const [rocket, setRocket] = useState(0);
  const [planets, setPlanets] = useState(0);
  const [direction, setDirection] = useState('up');
  const [dot, setDot] = useState(timeline.length - 2);

  useEffect(() => {
    if (currView !== 2) {
      if (planets !== 0) {
        setPlanets(0);
      }
      if (rocket !== (timeline.length + 1) * 10) {
        setRocket((timeline.length + 3) * 10);
      }
      if (dot !== timeline.length - 1) {
        setDot(timeline.length - 1);
      }
      setDirection('up');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currView]);

  useEffect(() => {
    setRocket((timeline.length + 3) * 10);

    setPlanets(0);
    setDot(timeline.length - 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRocket = () => {
    if (rocket - 18.5 < -21) {
      return;
    }
    setDot(dot - 1);
    setRocket(rocket - 18.5);
    setPlanets(planets + 50);
    setDirection('up');
  };
  const handleRocketDown = () => {
    if (rocket >= 110) {
      return;
    }
    setDot(dot + 1);
    setRocket(rocket + 18.5);
    setPlanets(planets - 50);
    setDirection('down');
  };

  const TimelineDot = (props) => {
    const { date, content, index } = props;

    return (
      <div onClick={handleRocket} className="flex cursor-pointer mt-10-0 z-0">
        <motion.div
          animate={{
            opacity: index === dot ? 0 : 1,
          }}
          transition={{ duration: 0.1 }}
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
          <p className="font-techno text-2-2 font-ranger leading-2-6 tracking-4-4">
            {date}
          </p>
          <p className="font-galatea mt-1-2 text-2-2 font-galatea leading-2-7 tracking-4-4">
            {content}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full flex relative">
      {/* Planet */}
      <div className="md:block hidden absolute -translate-x-70-percent -translate-y-70-percent left-0 top-0">
        <motion.div
          transition={{ ease: 'easeOut', duration: 2 }}
          animate={{
            x: planets,
            y: planets,
          }}
        >
          <img className="rotate-[20deg]" src="/images/mars.png" alt="" />
        </motion.div>
      </div>
      {/* Planet */}

      {/* Rocket */}
      <div className="h-90-percent overflow-hidden m-auto relative">
        <div className="w-50-percent mx-auto text-text-primary h-full relative z-50">
          <Rocket
            up={handleRocket}
            down={handleRocketDown}
            direction={direction}
          />
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
                  index={i}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Planet */}
      <div className="md:block hidden absolute translate-x-30-percent translate-y-30-percent right-0 bottom-0">
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
      {/* Planet */}
    </div>
  );
}

const Rocket = ({ up, down, direction }) => (
  <>
    <div className="absolute  h-17-0 -left-2-8 top-50-percent z-20 -translate-y-50-percent ">
      <motion.img
        animate={{
          rotate: direction === 'up' ? '0deg' : '180deg',
        }}
        className="h-full"
        src="/images/shuttle.png"
        alt=""
      />
    </div>
    <div className="absolute -left-30-0 top-50-percent z-10 -translate-y-50-percent ">
      <div className="p-0-6 rounded-1-6 border border-white/30">
        <div className="px-1-6 py-1-0 rounded-1-6 min-w-19-2 h-14-0 bg-[#171717] ">
          <div className="font-techno flex items-center justify-between text-1-6 text-white font-regularleading-2-1 tracking-3-0">
            Control Panel
            <InlineSVG src={ControlPanel.src} className="mt-0-4" />
          </div>
          <div className="mt-2-2 flex justify-between">
            <div
              onClick={up}
              className="group hover:bg-red cursor-pointer bg-[#242424] w-7-0 h-6-2 flex items-center justify-center"
            >
              <InlineSVG
                src={ArrowDownV2.src}
                className="group-hover:fill-white"
              />
            </div>
            <div
              onClick={down}
              className="group hover:bg-red cursor-pointer bg-[#242424] w-7-0 h-6-2 flex items-center justify-center rotate-180"
            >
              <InlineSVG
                src={ArrowDownV2.src}
                className="group-hover:fill-white"
              />
            </div>
          </div>
          <div className="absolute w-full  -right-100-percent top-50-percent flex items-center">
            <div className="-ml-1-0 w-1-6 h-1-6 rounded-50-percent border-2 border-white  flex items-center justify-center">
              <div className="bg-white w-0-6 h-0-6 rounded-50-percent"></div>
            </div>
            <div className="h-0-2 w-50-percent bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default TimelineDesktop;
