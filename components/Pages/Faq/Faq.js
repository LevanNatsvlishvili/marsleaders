/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Accordion from 'components/Accordion';
import { FAQIcon } from 'components/Icons/Faq';
import InlineSVG from 'react-inlinesvg';

function Faq({ carousel }) {
  return (
    <section id="faq" className="h-100-vh w-full flex relative overflow-hidden">
      <div className="w-4-0 min-w-4-0 lg:min-w-6-0 lg:w-6-0 h-full z-40 bg-text-primary">
        <div className="w-full h-full relative overflow-hidden flex justify-center">
          <div
            className="text-carousel text-carousel-6"
            style={{ transform: `translateY(${carousel}00px)` }}
          />
        </div>
      </div>
      <div className="w-full h-full flex relative bg-secondary">
        <div className="max-w-[1080px] px-3-0 lg:px-6-0 2xl:px-0 w-full mx-auto mt-3-0 lg:mt-6-0">
          <div className="w-full">
            <div className="flex items-center mb-1-6 lg:mb-2-0">
              <p className="font-techno text-white text-2-4 md:text-3-2 leading-3-8 lg:text-4-2 lg:leading-5-0 tracking-1-26 uppercase">
                frequently asked questions
              </p>
              <InlineSVG className="ml-auto w-6-0 " src={FAQIcon.src} />
            </div>
            <Accordion faqs={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    heading: 'What is Marsleaders?',
    content: `
  Marsleaders is a competitively driven community that aims to make a blockchain-
based multiplayer civilization based on Mars. Offering planet of explorations, new 
frontiers and opportunities for you to put your entrepreneurship talents to the test,
and be the constructor of your virtual existence. We start this by moving 195 Earth
countries along with their presidents and citizens to Mars in a fictitious manner, 
hosting competitions between the countries by giving weekly challenges and 
calculating points on a leaderboard based on how well citizens and presidents 
handle these challenges.
  `,
  },
  {
    heading: 'How can I learn more about the project and team?',
    content: `Check out #project-info, #roadmap, #utilities and #whitepaper on our Discord.
    Marsleaders is considered a doxxed team, although publicly it's not because of safety reasons.
    Marsleaders staff have already doxxed for big partnerships, and the team is always ready to doxx for legal institutions.
    Follow us to stay tuned on upcoming AMAs.
    `,
  },
  {
    heading: 'When is the mint?',
    content: `Supply: 1950
      <br/>Mint date: Jan 31, 5PM UTC
      <br/>Mint Duration: 1hr Presale ; 1hr Public
      <br/>Mint Price: WL: 0.06eth ; Public 0.09eth
      <br/>Max per wallet: 3 for Presale, 5 for Public
      `,
  },
  {
    heading: 'What is mint price?',
    content: `Price for Presale collection WL: 0.06ETH, Public: 0.09eth
    `,
  },
  {
    heading: 'How to get a whitelist?',
    content:
      '<p> Current Mission To Get Whitelisted <br/> \n ☛Get Martian Rank & invite 5 members <br/> ☛Invite 15 members with your personal invitation link</p>',
  },
];

export default Faq;
