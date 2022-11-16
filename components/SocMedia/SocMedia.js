import InlineSVG from 'react-inlinesvg';
import { Discord } from 'components/Icons/Discord';
import { Twitter } from 'components/Icons/Twitter';

function SocMedia() {
  return (
    <div className="">
      <div className="flex justify-center">
        <a
          target="_blank"
          href="https://discord.gg/marsleaders"
          rel="noreferrer"
        >
          <div className="text-white cursor-pointer mx-1-0 bg-[#5165F6] h-3-0 w-12-0 px-0-8 justify-center flex items-center font-galatea tracking-[3px] text-1-6 font-bold leading-2-1">
            <InlineSVG className="mr-1-0 rotate-90 h-3-0" src={Discord.src} />
            Discord
          </div>
        </a>
        <a
          target="_blank"
          href="https://twitter.com/Marsleaders"
          rel="noreferrer"
        >
          <div className="text-white cursor-pointer mx-1-0 bg-[#1CB7EB] h-3-0 w-12-0 px-0-8 justify-center flex items-center font-galatea tracking-[3px] text-1-6 font-bold leading-2-1">
            <InlineSVG className="mr-1-0 rotate-90 h-2-0" src={Twitter.src} />
            Twitter
          </div>
        </a>
      </div>
    </div>
  );
}

export default SocMedia;
