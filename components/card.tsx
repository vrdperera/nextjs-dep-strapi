import Image from 'next/image';
import Marquee from 'react-fast-marquee';

function Card() {
  return (
    <div className="max-w-7xl bg-black mx-auto flex items-center gap-5 ">
      {/* left */}

      <div className="hidden  bg-blue-500 lg:flex flex-wrap justify-between gap-11">
        <div>
          <p className="text-6xl">30+</p>
          <p className="text-2xl">established regions</p>
        </div>
        <div>
          <p className="text-6xl">30+</p>
          <p className="text-2xl">established regions</p>
        </div>
      </div>

      {/* right */}
      <div className="p-14 flex-1 overflow-hidden border-2 text-white border-[#2A2A35]  bg-[#141419] bg-opacity-80 bg-clip-padding  font-jost backdrop-blur-sm backdrop-filter rounded-3xl">
        <p className="text-2xl mb-4">
          Completed 60 + Successful projects all <br />
          over the world since 2020
        </p>
        <p className="text-2xl mb-4">Trusted by</p>

        <div className="max-w-xl mx-auto">
          {/* marquee */}
          <Marquee pauseOnHover={true} gradient={false} pauseOnClick={true}>
            <img
              src="/vercel.svg"
              className="w-[160px] h-[64px] mr-10 object-contain "
            />
            <img
              src="/nextjs.svg"
              className="w-[160px] h-[64px] mr-10 object-contain"
            />
            <img
              src="/react.svg"
              className="w-[160px] h-[64px] mr-10 object-contain"
            />
            <img
              src="/ts.svg"
              className="w-[160px] h-[64px] mr-10 object-contain"
            />
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Card;
