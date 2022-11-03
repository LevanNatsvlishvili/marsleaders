import clsx from 'clsx';
import React, { useState } from 'react';

function Tabs() {
  const [active, setActive] = useState('citizens');
  return (
    <div className="flex">
      <div
        onClick={() => setActive('citizens')}
        className={clsx(
          'cursor-pointer text-3-2 leading-3-8 tracking-6-4 flex items-center font-ranger justify-center h-6-0 w-26-0 text-text-primary bg-red-darker',
          active === 'citizens' && '!bg-black'
        )}
      >
        Citizens
      </div>
      <div
        onClick={() => setActive('presidents')}
        className={clsx(
          'cursor-pointer text-3-2 leading-3-8 tracking-6-4 flex items-center font-ranger justify-center h-6-0 w-26-0 text-text-primary bg-red-darker',
          active === 'presidents' && '!bg-black'
        )}
      >
        Presidents
      </div>
    </div>
  );
}

export default Tabs;
