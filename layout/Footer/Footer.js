import Link from 'next/link';
import { LogoFooter } from 'components/Icons/Logo';
import Button from 'components/Button';
import IconText from 'components/IconText';
import { PhoneSm } from 'components/Icons/Phone';
import { MailSm } from 'components/Icons/Mail';
import {
  AndroidDownload,
  AppleDownload,
} from 'components/Icons/DownloadMobile';
import { FacebookDark16 } from 'components/Icons/SocMedia/Facebook';
import { YoutubeDark16 } from 'components/Icons/SocMedia/Youtube';
import { InstagramDark16 } from 'components/Icons/SocMedia/Instagram';

const NavLinks = [
  { title: 'საბას შესახებ', url: '' },
  { title: 'წიგნები', url: '' },
  { title: 'პარტნიორები', url: '' },
  { title: 'პრემიუმის შეძენა', url: '' },
  { title: 'ელექტრონულ გამომცემლად რეგისტრაცია', url: '' },
  { title: 'კითხვა-პასუხი', url: '' },
];
const SabaTermLinks = [
  { title: 'ხელშეკრულებები', url: '' },
  { title: 'კონფიდენციალურობა', url: '' },
  { title: 'წესები და პირობები', url: '' },
];

function Footer() {
  return (
    <footer>
      <div className="cont grid grid-cols-12 md:gap-x-1-8 xl:gap-x-3-0 bg-white py-7-2">
        <div className="col-span-12 md:col-span-6 border-b md:border-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2-8 md:gap-x-1-8 xl:gap-x-3-0 pb-3-6 md:pb-0">
            {NavLinks.map((link, i) => (
              <div
                key={i}
                className="text-1-4 leading-2-4 text-primary font-500"
              >
                <Link href={link.url}>{link.title}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 md:col-span-3">
          <div className="grid grid-cols-12 gap-y-2-8 py-5-6 md:py-0">
            <div className="col-span-12 ">
              <IconText icon={PhoneSm.src} text="+995 32 2 27 27 27" />
            </div>
            <div className="col-span-12 ">
              <IconText icon={MailSm.src} text="Contact@saba.ge" />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 ">
          <div className="flex md:flex-col xss:flex-col-reverse flex-col">
            <div className="mt-5-6 md:mt-0">
              <div className="tbc-sailec font-700 text-1-4 leading-1-7">
                ჩამოტვირთე
                <span className="3xl:inline hidden"> საბას წამკითხველი</span>
                <span className="3xl:hidden inline"> საბა</span>
              </div>
              <div className="mt-2-4">
                <div className="grid xss:grid-cols-2 xss:gap-x-1-0 xss:gap-y-0 gap-y-1-2">
                  <Button
                    type="secondary"
                    color="pink"
                    icon={AndroidDownload.src}
                  />
                  <Button
                    type="secondary"
                    color="pink"
                    icon={AppleDownload.src}
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div className="tbc-sailec font-700 text-1-4 leading-1-7 mt-4-0">
                გამოგვყევი
              </div>
              <div className="mt-2-4 flex">
                <div className="mr-1-0">
                  <Button type="cube" color="pink" icon={FacebookDark16.src} />
                </div>
                <div className="mr-1-0">
                  <Button type="cube" color="pink" icon={InstagramDark16.src} />
                </div>
                <div className="">
                  <Button type="cube" color="pink" icon={YoutubeDark16.src} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cont min-h-21-8 md:min-h-7-8 flex md:items-center flex-col-reverse md:flex-row justify-center">
        <div className="mt-4-8 md:mt-0">
          <IconText
            fontSize="1-2"
            fontWeight="400"
            leading="2-0"
            color="tertiary"
            icon={LogoFooter.src}
            text="2022  ყველა უფლება დაცულია"
          />
        </div>
        <div className="md:ml-auto flex flex-wrap">
          {SabaTermLinks.map((link, i) => (
            <div
              key={i}
              className="md:ml-3-5 mr-3-5 md:mr-0 text-1-4 md:text-1-2 leading-2-0 text-tertiary mt-2-0 md:mt-0"
            >
              <Link href={link.url}>{link.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
