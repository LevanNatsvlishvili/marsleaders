/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Accordion from 'components/Accordion';
import { FAQIcon } from 'components/Icons/Faq';
import InlineSVG from 'react-inlinesvg';

function Faq({ carousel }) {
  return (
    <section className="h-100-vh w-full flex relative overflow-hidden">
      <div className="w-4-0 min-w-4-0 lg:min-w-6-0 lg:w-6-0 h-full z-40 bg-text-primary">
        <div className="w-full h-full relative overflow-hidden flex justify-center">
          <div
            className="text-carousel text-carousel-5"
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
    content:
      'Marsleaders is a competitively driven community that aims to make a blockchain-based multiplayer roleplay life-simulation civilization based on Mars. Moving 195 Earth countries along with their presidents and citizens to Mars in a fictitious manner, hosting competitions between the countries by hosting weekly challenges and calculating points on a leaderboard based on how well citizens and presidents handle these challenges.',
  },
  {
    heading: 'Is team doxxed and how can I get more details about project?',
    content: `The team is doxxed. If you want to be more educated about the project, we advise you to check #project-info, #roadmap, and #utilities.
    <br/>Please always feel free to ask any questions you may have by raising a ticket or asking in community chats. 
    `,
  },
  {
    heading: 'When is mint and strategies?',
    content: `Marsleaders is launching first sale only for VIPs, people who have whitelist, will be able to purchase NFT before the public sale. There is more than one month period between VIP sale and Public sale, because we announced warmup competition before first season takes off.
      <br/>
      VIP Sale - 14 January
      <br/>Launching presidents at an auction (10 presidents weekly) - From 20 January
      <br/>Launching warmup competition between VIP community members with prizepool of $20 000
      <br/>Launching public sale at 20 Ferbuary
      <br/>First season takes off.
      `,
  },
  {
    heading: 'What is mint price?',
    content: `Price for Presale collection is 0.07ETH, Public mint price is TBA.
    <br/>You can mint up to 3 NFT with whitelist.
    `,
  },
  {
    heading: 'How do get I A whitelist?',
    content:
      '<p> Current Mission To Get Whitelisted <br/> \n ☛Get JR.Martian Rank & invite 3 members<br/> ☛Invite 10 members with your personal invitation link</p>',
  },
];

export default Faq;
