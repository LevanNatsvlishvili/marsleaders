/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import TimelineDesktop from './TimelineDesktop';
import TimelineMobile from './TimelineMobile';

function Timeline({ carousel }) {
  return (
    <section className="h-100-vh w-full flex relative overflow-hidden">
      <div className="w-4-0 min-w-4-0 lg:min-w-6-0 lg:w-6-0 h-full z-40 bg-text-primary">
        <div className="w-full h-full relative overflow-hidden flex justify-center">
          <div
            className="text-carousel text-carousel-3"
            style={{ transform: `translateY(${carousel}00px)` }}
          />
        </div>
      </div>
      <div className="w-full h-full hidden lg:block">
        <TimelineDesktop />
      </div>
      <div className="w-full h-full block lg:hidden">
        <TimelineMobile />
      </div>
    </section>
  );
}

export default Timeline;
