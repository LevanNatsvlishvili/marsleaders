import InlineSVG from 'react-inlinesvg';
import { Logo } from 'components/Icons/Logo';
import { Star } from '../../components/Icons/Star';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { Wallet } from '../../components/Icons/Wallet';
import { Hamburger } from 'components/Icons/Hamburger';
import SocMedia from 'components/SocMedia';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useStore from 'context/Context';

const NavLinks = [
  { title: 'Home', activeIndex: [0] },
  { title: 'About', activeIndex: [1, 2] },
  { title: 'Roadmap', activeIndex: [3] },
  { title: 'Benefits', activeIndex: [4] },
  { title: 'FAQ', activeIndex: [5] },
];

function useQuery() {
  const location = useRouter();
  return location.pathname;
}

function Header() {
  const { currView, setCurrView, swiperRef } = useStore();

  const location = useQuery();
  const [hamburger, setHamburger] = useState(false);

  const handleNavigation = (val) => {
    swiperRef.slideTo(val);
    setCurrView(val);
  };
  const handleNavigationMobile = (val) => {
    swiperRef.slideTo(val);
    setCurrView(val);
    setHamburger(false);
  };

  return (
    <header className="h-4-0 lg:h-6-0 bg-black w-full fixed z-20 flex items-center ">
      <div className="w-4-0 h-4-0 max-w-4-0 lg:h-6-0 lg:w-6-0 lg:min-w-6-0 flex items-center justify-center bg-red">
        <InlineSVG src={Logo.src} className="lg:w-5-0 lg:h-5-0 w-3-0 h-3-0" />
      </div>
      <nav className="w-full flex items-center justify-end relative">
        <div className="hidden lg:flex mr-3-0">
          {NavLinks.map((link, i) => (
            <div
              onClick={() => handleNavigation(link.activeIndex[0])}
              key={i}
              className={clsx(
                'font-techno cursor-pointer hover:text-text-primary text-text-primary/50 leading-2-4 text-2-6 lg:text-3-2 tracking-0-96 text-primary flex items-center',
                {
                  '!text-text-primary': link.activeIndex.includes(currView),
                }
              )}
            >
              <p href={link.url}>{link.title}</p>
              {i !== NavLinks.length - 1 && (
                <InlineSVG src={Star.src} className="mx-5-2" />
              )}
            </div>
          ))}
        </div>
        <div className="w-8-0 h-4-0 lg:h-6-0 flex items-center justify-center bg-red cursor-pointer relative group">
          <InlineSVG
            src={Wallet.src}
            className="h-2-8 w-2-8 lg:w-auto lg:h-auto"
          />
          <div className="hidden lg-block group-hover:opacity-100 opacity-0 duration-300 -bottom-5-0 -ml-2-0 bg-black text-white text-1-6 absolute px-1-2 py-0-2 rounded-0-8 mint">
            MINT
          </div>
          <p className="lg:hidden inline ml-0-8 text-white text-1-4 font-galatea leading-1-9">
            MINT
          </p>
        </div>
        <div
          onClick={() => setHamburger(!hamburger)}
          className="flex lg:hidden w-4-0 h-4-0 flex items-center justify-center"
        >
          <InlineSVG src={Hamburger.src} />
        </div>
      </nav>
      <AnimatePresence>
        {hamburger && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              translateX: [200, 0],
              translateY: [50, 0],
              scale: [0.75, 1],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
            }}
            className="w-full h-100-vh bg-black fixed top-4-0 flex items-center"
          >
            <ul>
              {NavLinks.map((link, i) => (
                <li
                  onClick={() => handleNavigationMobile(link.activeIndex[0])}
                  key={i}
                  className={clsx(
                    'font-techno mb-3-0 hover:text-text-primary text-text-primary/50 leading-2-4 text-2-6 lg:text-3-2 tracking-0-96 text-primary flex items-center',
                    {
                      '!text-text-primary': link.activeIndex.includes(currView),
                    }
                  )}
                >
                  <InlineSVG src={Star.src} className="mx-5-2 " />
                  {link.title}
                </li>
              ))}
            </ul>
            <div className="absolute bottom-8-0 w-full text-white ">
              <SocMedia />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="fixed -right-12-5 -rotate-90 bottom-20-percent">
        <SocMedia />
      </div>
    </header>
  );
}

export default Header;
