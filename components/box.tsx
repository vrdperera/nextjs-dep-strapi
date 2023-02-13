import BoxComp from './boxComp';
import Marquee from 'react-fast-marquee';

function Box() {
  const colorArr = [
    'bg-red-300',
    'bg-red-400',
    'bg-blue-400',
    'bg-blue-700',
    'bg-yellow-400',
    'bg-reyellowd-800',
    'bg-yellow-600',
    'bg-green-400',
    'bg-green-800',
    'bg-green-200',
    'bg-red-400',
    'bg-red-700',
  ];
  console.log(colorArr[1]);
  return (
    <>
      <div className="flex w-full mx-auto">
        <Marquee>
          {Array.from({ length: 12 }, (_, i) => (
            <BoxComp key={i} id={i} color={colorArr} />
          ))}
        </Marquee>
      </div>
      <div className="max-w-7xl mx-auto">
        <Marquee>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </>
  );
}

export default Box;
