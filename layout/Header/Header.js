import Link from 'next/link';
import InlineSVG from 'react-inlinesvg';
import { Logo } from 'components/Icons/Logo';
import { Star } from '../../components/Icons/Star';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { Wallet } from '../../components/Icons/Wallet';
import { Hamburger } from 'components/Icons/Hamburger';

const NavLinks = [
  { title: 'Home', url: '/' },
  { title: 'Contact', url: '/contact' },
  { title: 'About Us', url: '/about' },
];

function useQuery() {
  const location = useRouter();
  return location.pathname;
}

function Header() {
  const location = useQuery();

  return (
    <header className="h-4-0 lg:h-6-0 bg-black w-full fixed z-20 flex items-center ">
      <div className="w-4-0 h-4-0 max-w-4-0 lg:h-6-0 lg:w-6-0 lg:min-w-6-0 flex items-center justify-center bg-red">
        <InlineSVG src={Logo.src} className="w-3-0 h-3-0" />
      </div>
      <nav className="w-full flex items-center justify-end">
        <div className="hidden sm:flex mr-3-0">
          {NavLinks.map((link, i) => (
            <div
              key={i}
              className={clsx(
                'hover:text-text-primary text-text-primary/50 leading-2-4 text-2-6 lg:text-3-2 tracking-0-96 text-primary flex items-center',
                {
                  '!text-text-primary': location === link.url,
                }
              )}
            >
              <Link href={link.url}>{link.title}</Link>
              {i !== NavLinks.length - 1 && (
                <InlineSVG src={Star.src} className="mx-5-2 " />
              )}
            </div>
          ))}
        </div>
        <div className="w-8-0 h-4-0 lg:h-6-0 flex items-center justify-center bg-red cursor-pointer relative group">
          <InlineSVG
            src={Wallet.src}
            className="h-2-8 w-2-8 lg:w-auto lg:h-auto"
          />
          <div className="group-hover:opacity-100 opacity-0 duration-300 -bottom-5-0 -ml-2-0 bg-black text-white text-1-6 absolute px-1-2 py-0-2 rounded-0-8 mint">
            MINT
          </div>
          <p className="sm:hidden inline ml-0-8 text-white text-1-4 font-galatea leading-1-9">
            MINT
          </p>
        </div>
        <div className="flex sm:hidden w-4-0 h-4-0 flex items-center justify-center">
          <InlineSVG src={Hamburger.src} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
