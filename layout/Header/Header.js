/* eslint-disable react-hooks/exhaustive-deps */
import InlineSVG from 'react-inlinesvg';
import { Logo } from 'components/Icons/Logo';
import { Star } from '../../components/Icons/Star';
import clsx from 'clsx';
import { Wallet } from '../../components/Icons/Wallet';
import { Hamburger } from 'components/Icons/Hamburger';
import SocMedia from 'components/SocMedia';
import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useStore from 'context/Context';
import { debounce } from 'lodash';

const NavLinksMobile = [
  { title: 'Home', activeIndex: [] },
  { title: 'About', activeIndex: [] },
  { title: 'Roadmap', activeIndex: [] },
  { title: 'Benefits', activeIndex: [] },
  { title: 'Team', activeIndex: [] },
  { title: 'FAQ', activeIndex: [] },
];
const NavLinks = [
  { title: 'Home', activeIndex: [0] },
  { title: 'About', activeIndex: [1, 2] },
  { title: 'Roadmap', activeIndex: [3] },
  { title: 'Benefits', activeIndex: [4] },
  { title: 'Team', activeIndex: [5] },
  { title: 'FAQ', activeIndex: [6] },
];

function Header() {
  const { currView, setCurrView, swiperRef, setCurrViewMobile } = useStore();

  const [hamburger, setHamburger] = useState(true);
  const [links, setLinks] = useState([]);

  const handleNavigation = (val) => {
    swiperRef.slideTo(val);
    setCurrView(val);
  };
  const handleNavigationMobile = (link) => {
    window.scroll(0, link.activeIndex[0]);
    setHamburger(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.mobile-nav-links li');
    var current = '';

    const arr = [0];
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (sectionTop === 0 && section.id !== 'home') return;
      const curr = arr.find((val) => sectionTop !== val);
      if (!curr) {
        arr.push(sectionTop);
      }

      if (window.pageYOffset >= sectionTop - 60) {
        current = section.getAttribute('id');
      }
    });

    arr.splice(0, 2);
    const returnArr = NavLinksMobile.filter(
      (el, i) => i !== arr.length - 1
    ).map((el, i) => {
      if (i === 1) {
        return {
          ...el,
          activeIndex: [arr[1], arr[2]],
        };
      }
      if (i === 0)
        return {
          ...el,
          activeIndex: [arr[i]],
        };
      return {
        ...el,
        activeIndex: [arr[i + 1]],
      };
    });
    if (links.length === 0) {
      setLinks(returnArr);
    }

    navLi.forEach((li) => {
      li.classList.remove('!text-text-primary');
      if (li.classList.contains(current)) {
        li.classList.add('!text-text-primary');
      }
    });
  }, [handleNavigationMobile]);

  useEffect(() => {
    setHamburger(false);
  }, []);

  useEffect(() => {
    var xDown = null;
    var yDown = null;

    const handleScrollValue = () => async (value) => {
      // console.log(value.view.window.pageYOffset);
      setCurrViewMobile(value);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedHandleScrollUpdate = debounce(handleScrollValue(), 500);

    function getTouches(evt) {
      return (
        evt.touches || // browser API
        evt.originalEvent.touches
      ); // jQuery
    }

    function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    }

    function handleTouchMove(evt) {
      if (!xDown || !yDown) {
        return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;
      console.log(yDiff);
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /*most significant*/
        if (xDiff > 0) {
          /* left swipe */
          setCurrViewMobile((prev) => prev + 1);
        } else {
          /* right swipe */
          setCurrViewMobile((prev) => prev + 1);
        }
      } else {
        if (yDiff > 0) {
          /* down swipe */
          setCurrViewMobile((prev) => prev + 1);
        } else {
          /* up swipe */
          setCurrViewMobile((prev) => prev + 1);
        }
      }
      /* reset values */
      xDown = null;
      yDown = null;
    }

    document.body.addEventListener('touchstart', handleTouchStart, false);
    document.body.addEventListener('touchmove', handleTouchMove, false);

    return () => {
      document.body.removeEventListener('touchstart', handleTouchStart, false);
      document.body.removeEventListener('touchmove', handleTouchMove, false);
    };
  }, []);

  return (
    <header className="z-60 h-4-0 lg:h-6-0 bg-black w-full fixed z-20 flex items-center ">
      <div
        onClick={() => handleNavigation(0)}
        className=" cursor-pointer w-4-0 h-4-0 max-w-4-0 lg:h-6-0 lg:w-6-0 lg:min-w-6-0 flex items-center justify-center bg-red"
      >
        <InlineSVG src={Logo.src} className="lg:w-5-0 lg:h-5-0 w-3-0 h-3-0" />
      </div>
      <nav className="w-full flex items-center justify-end relative">
        <div className="hidden lg:flex mr-3-0">
          {NavLinks.map((link, i) => (
            <div
              onClick={() => handleNavigation(link.activeIndex[0])}
              key={i}
              className={clsx(
                'font-techno select-none cursor-pointer hover:text-text-primary text-text-primary/50 leading-2-4 text-2-6 lg:text-3-2 tracking-0-96 text-primary flex items-center',
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
          <div className="hidden lg:block group-hover:opacity-100 opacity-0 duration-300 -bottom-5-0 -ml-2-0 bg-black text-white text-1-6 absolute px-1-2 py-0-2 rounded-0-8 mint">
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
            className="w-full h-100-vh bg-black fixed top-4-0 flex items-center z-100 "
          >
            <ul className="mobile-nav-links">
              {links.map((link, i) => (
                <li
                  onClick={() => handleNavigationMobile(link)}
                  key={i}
                  className={clsx(
                    'select-none font-techno mb-3-0 hover:text-text-primary text-text-primary/50 leading-2-4 text-2-6 lg:text-3-2 tracking-0-96 text-primary flex items-center',
                    {
                      [link.title.toLowerCase()]: true,
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
      <div className="fixed right-0 bottom-20-percent">
        <SocMedia />
      </div>
    </header>
  );
}

export default Header;
