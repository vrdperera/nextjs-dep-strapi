import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';

interface IexpanProps {
  cursorPointer: boolean;
}

function Expnad({ cursorPointer }: IexpanProps) {
  const [expand, setExpand] = useState<boolean>(false);
  console.log(expand);
  function expandClick() {
    setExpand((pre) => !pre);
  }

  return (
    <div className="text-white text-center">
      <Link href={''}>
        <button
          className={clsx(
            `px-14 rounded-xl py-4 bg-blue-800`,
            cursorPointer && 'cursor-auto'
          )}
          onClick={expandClick}
        >
          Click
        </button>
      </Link>
      {expand && <div>hi</div>}
    </div>
  );
}

export default Expnad;
