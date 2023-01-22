/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import useStore from 'context';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import InlineSVG from 'react-inlinesvg';
import { ControlPanel } from 'components/Icons/ControlPanel';
import { ArrowDownV2 } from 'components/Icons/Arrow';

function TimelineMobile({ timeline }) {
  const { currView } = useStore();
  const [rocket, setRocket] = useState(0);
  const [planets, setPlanets] = useState(0);
  const [dot, setDot] = useState(timeline.length - 1);
  const [direction, setDirection] = useState('up');

  useEffect(() => {
    if (currView !== 2) {
      if (rocket !== (timeline.length + 1) * 10) {
        setRocket(120);
      }
      if (dot !== timeline.length - 1) {
        setDot(timeline.length - 1);
      }
      setDirection('up');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currView]);

  useEffect(() => {
    setRocket(120);
    setDot(timeline.length - 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRocket = () => {
    if (rocket <= -20) {
      return;
    }
    setDot(dot - 1);
    setRocket(rocket - 20);
    // setPlanets(planets + 50);
    setDirection('up');
  };
  const handleRocketDown = () => {
    if (rocket >= 110) {
      return;
    }
    setDot(dot + 1);
    setRocket(rocket + 20);
    setPlanets(planets - 50);
    setDirection('down');
  };

  const TimelineDot = (props) => {
    const { date, index } = props;

    return (
      <div
        onClick={handleRocket}
        className="absolute w-max text-center cursor-pointer z-0 left-50-percent -translate-x-50-percent"
      >
        {index <= dot && (
          <motion.div animate={{ opacity: index >= dot ? 0 : 1 }}>
            <div
              className={clsx(
                'mx-auto min-w-4-6 w-4-6 h-4-6 bg-white rounded-50-percent flex items-center justify-center duration-300'
              )}
            >
              <div className="bg-red rounded-50-percent w-2-1 h-2-1"></div>
            </div>
            <div className="h-3-2 border border-[#2c2c2c] px-1-6 rounded-1-6 mt-0-8 flex items-center">
              <p className="text-white text-1-6 font-ranger leading-1-9 tracking-3-2">
                {date}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full h-full ">
      <div className="h-45-0 w-full overflow-hidden">
        <div className="absolute h-8-0 w-6-0 xss:h-10-0 -mt-1-0 top-50-percent -ml-4-0 z-20 left-50-percent -translate-y-50-percent translate-x-50-percent">
          <motion.img
            animate={{
              rotate: direction === 'up' ? '0deg' : '180deg',
            }}
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
          className="h-full w-full duration-1000 relative mt-8-0 xss:mt-12-0 xs:mt-10-0 lg:mt-16-0 lg:mt-18-0"
        >
          <div className="absolute h-full left-50-percent -translate-x-50-percent ">
            {timeline.map((checkpoint, i) => (
              <div key={i} className="h-20-percent items-center">
                <div className="h-full w-0-1 bg-white"></div>
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
      <div className=" w-full p-2-0">
        <div className="h-3-8 border border-[#2c2c2c] px-1-6 rounded-1-6 mt-0-8 flex items-center">
          <p className="font-techno text-white text-1-6 font-ranger leading-1-9 tracking-3-2">
            {timeline[dot]['date']}
          </p>
        </div>
        <div className="h-10-0 xsm:h-14-0 mb-0-8 xss:mb-2-0 border border-[#2c2c2c] px-1-6 rounded-1-6 mt-0-8 flex items-center">
          <p className="font-galatea text-white text-1-4 xs:text-1-6 font-ranger leading-1-9 tracking-3-2">
            {timeline[dot]['content']}
          </p>
        </div>
        <div className="">
          <CPanel down={handleRocketDown} up={handleRocket} />
        </div>
      </div>
    </div>
  );
}

const CPanel = ({ up, down }) => (
  <div className="">
    <div className="p-0-6 rounded-1-6 border border-white/30">
      <div className="px-1-6 py-1-0 rounded-1-6 min-w-19-2 h-full bg-[#171717] ">
        <div className="font-techno flex items-center justify-between text-1-6 text-white font-regularleading-2-1 tracking-3-0">
          Control Panel
          <InlineSVG src={ControlPanel.src} className="mt-0-4" />
        </div>
        <div className="mt-2-2 flex justify-between">
          <div
            onClick={up}
            className="cursor-pointer bg-[#242424] w-full mr-1-0 h-4-0 xss:h-6-2 flex items-center justify-center"
          >
            <InlineSVG src={ArrowDownV2.src} className="w-1-6 xs:w-auto" />
          </div>
          <div
            onClick={down}
            className="cursor-pointer bg-[#242424] w-full ml-1-0 h-4-0 xss:h-6-2 flex items-center justify-center rotate-180"
          >
            <InlineSVG src={ArrowDownV2.src} className="w-1-6 xs:w-auto" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TimelineMobile;
