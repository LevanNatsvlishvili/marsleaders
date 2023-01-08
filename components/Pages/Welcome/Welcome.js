/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import useStore from 'context';
import HeadingGlitch from 'components/Animations/HeadingGlitch';
import ScrollDown from 'components/Animations/ScrollDown';

function Welcome({ carousel }) {
  const { currView, loading } = useStore();

  return (
    <section id="home" className="h-100-vh w-full flex relative section">
      <div className="w-4-0 min-w-4-0 lg:min-w-6-0 lg:w-6-0 h-full z-40 bg-black ">
        <div className="w-full h-full relative overflow-hidden flex justify-center">
          <div
            className="text-carousel text-carousel-1"
            style={{ transform: `translateY(${carousel}00px)` }}
          />
        </div>
      </div>
      <div className="relative w-full h-full">
        <video
          className="w-100-vw h-100-vh object-cover hidden lg:block"
          width="100%"
          height="100%"
          autoPlay={true}
          loop={true}
          muted
        >
          <source src="./video/marsleaders-banner.mp4" type="video/mp4" />
        </video>
        <div className="w-full h-100-vh ">
          <img
            src="/images/cover-image.png"
            alt=""
            className="block lg:hidden object-cover w-full h-full"
          />
        </div>

        <div className="md:block hidden absolute top-50-percent md:-translate-y-50-percent left-50-percent -translate-x-50-percent w-100-percent">
          <div className="md:block hidden mb-10-0">
            {!loading && <HeadingGlitch />}
          </div>

          <ScrollDown loading={loading} currView={currView} />
        </div>
        <div className="absolute bottom-25-percent left-50-percent -translate-x-50-percent md:hidden block">
          <ScrollDown loading={loading} currView={currView} />
        </div>
      </div>
    </section>
  );
}
export default Welcome;
