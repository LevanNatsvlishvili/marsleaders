import clsx from 'clsx';
import React from 'react';

function Loading(props) {
  const { loading } = props;

  return (
    <div
      className={clsx(
        `bg-black z-50 w-full h-full flex justify-center items-center absolute`,
        {
          'opacity-100': loading,
          'opacity-0': !loading,
        }
      )}
    >
      <div className="">
        <div className="">
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
