import Link from 'next/link';
import InlineSVG from 'react-inlinesvg';
import { Logo } from 'components/Icons/Logo';
import { SearchIconMd } from 'components/Icons/SearchIcon';
import Button from 'components/Button';
import { HamburgerMenu } from 'components/Icons/HamburgerMenu';

const NavLinks = [
  { title: 'წიგნები', url: '/books' },
  { title: 'პრემია საბა', url: '/premium' },
  { title: 'ბლოგი', url: '/blog' },
  { title: 'ჩვენ შესახებ', url: '/about-us' },
  { title: 'კონტაქტი', url: '/contact' },
  { title: 'ხდკ', url: '/faq' },
];

function Header() {
  return (
    <header className="bg-white">
      <nav className="cont flex h-9-6 items-center">
        <div className="mr-2-0 mr-0-4 cursor-pointer">
          <Link className="" href="/">
            <InlineSVG src={Logo.src} />
          </Link>
        </div>
        <div className="xl:flex hidden">
          {NavLinks.map((link, i) => (
            <div
              key={i}
              className="px-2-0 m-0-4 text-1-4 leading-2-4 text-primary"
            >
              <Link href={link.url}>{link.title}</Link>
            </div>
          ))}
        </div>
        <div className="ml-auto items-center flex flex-row-reverse xl:flex-row">
          <div className="xl:hidden unset xl:ml-0 ml-3-5">
            <Button color="transparent" type="cube" icon={HamburgerMenu.src} />
          </div>
          <div className=" xl:ml-0 ml-4-0">
            <Button color="transparent" type="cube" icon={SearchIconMd.src} />
          </div>
          <div className="xl:ml-3-5 hidden sm:inline">
            <Button text="შესვლა" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
