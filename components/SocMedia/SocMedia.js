import InlineSVG from 'react-inlinesvg';
import { Discord } from 'components/Icons/Discord';
import { Twitter } from 'components/Icons/Twitter';

function SocMedia({ isMobile }) {
  if (isMobile)
    return (
      <div className="grid grid-cols-2 gap-x-2-0 px-5-0">
        <div className="w-full">
          <a
            target="_blank"
            href="https://discord.gg/marsleaders"
            rel="noreferrer"
          >
            <div className="duration-300  text-white cursor-pointer bg-[#5165F6] h-4-0 px-0-8 justify-center flex items-center font-galatea tracking-[3px] text-1-6 font-bold leading-2-1">
              <InlineSVG className="h-3-0 rotate-90" src={Discord.src} />
              <p className="ml-1-0">Discord</p>
            </div>
          </a>
        </div>
        <div className="w-full">
          <a
            target="_blank"
            href="https://twitter.com/Marsleaders"
            rel="noreferrer"
          >
            <div className="duration-300  text-white cursor-pointer bg-[#1CB7EB] h-4-0 px-0-8 justify-center flex items-center font-galatea tracking-[3px] text-1-6 font-bold leading-2-1">
              <InlineSVG className="h-3-0 rotate-90" src={Twitter.src} />
              <p className="ml-1-0">Twitter</p>
            </div>
          </a>
        </div>
      </div>
    );
  return (
    <div className="">
      <div className="w-5-5">
        <a
          target="_blank"
          href="https://discord.gg/marsleaders"
          rel="noreferrer"
        >
          <div className="ml-auto duration-300 hover:w-5-5 text-white cursor-pointer bg-[#5165F6] h-4-0 w-4-0 px-0-8 justify-center flex items-center font-galatea tracking-[3px] text-1-6 font-bold leading-2-1">
            <InlineSVG className="h-3-0 rotate-90" src={Discord.src} />
          </div>
        </a>
        <a
          target="_blank"
          href="https://twitter.com/Marsleaders"
          rel="noreferrer"
        >
          <div className="ml-auto duration-300 hover:w-6-0 text-white cursor-pointer bg-[#1CB7EB] h-4-0 w-4-0 px-0-8 justify-center flex items-center font-galatea tracking-[3px] text-1-6 font-bold leading-2-1">
            <InlineSVG className="h-2-0 rotate-90" src={Twitter.src} />
          </div>
        </a>
      </div>
    </div>
  );
}

export default SocMedia;
