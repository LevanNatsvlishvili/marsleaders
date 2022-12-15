import clsx from 'clsx';
import React from 'react';

function Tabs({ onChange, active }) {
  return (
    <div className="flex w-full">
      <div
        onClick={() => onChange('citizens')}
        className={clsx(
          'select-none font-techno cursor-pointer text-1-6 xsm:text-2-0 sm:text-3-2 leading-3-8 tracking-6-4 flex items-center font-ranger justify-center h-6-0 w-full sm:w-26-0 text-text-primary bg-red-darker',
          active === 'citizens' && '!bg-black'
        )}
      >
        Citizens
      </div>
      <div
        onClick={() => onChange('presidents')}
        className={clsx(
          'select-none font-techno cursor-pointer text-1-6 xsm:text-2-0 sm:text-3-2 leading-3-8 tracking-6-4 flex items-center font-ranger justify-center h-6-0 w-full sm:w-26-0 text-text-primary bg-red-darker',
          active === 'presidents' && '!bg-black'
        )}
      >
        Presidents
      </div>
    </div>
  );
}

export default Tabs;
