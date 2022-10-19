import Link from 'next/link';
import InlineSVG from 'react-inlinesvg';
import { Logo } from 'components/Icons/Logo';
import { Star } from '../../components/Icons/Star';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { Wallet } from '../../components/Icons/Wallet';

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
    <header className="h-6-0 bg-black/30 w-full fixed z-20 flex items-center ">
      <div className="h-6-0 w-6-0 min-w-6-0 flex items-center justify-center bg-red">
        <InlineSVG src={Logo.src} />
      </div>
      <nav className="w-full flex items-center justify-end">
        <div className=" flex mr-3-0">
          {NavLinks.map((link, i) => (
            <div
              key={i}
              className={clsx(
                'hover:text-text-primary text-text-primary/50 leading-2-4 text-3-2  text-primary flex items-center',
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
        <div className="w-8-0 h-6-0 flex items-center justify-center bg-red cursor-pointer">
          <InlineSVG src={Wallet.src} className="" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
