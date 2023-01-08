import clsx from 'clsx';
import LoadingAnimate from 'components/Animations/Loading';
import React from 'react';

function Loading(props) {
  const { loading } = props;

  return (
    <div
      className={clsx(
        `bg-black z-70 w-full h-full flex justify-center items-center fixed`,
        {
          block: loading,
          hidden: !loading,
        }
      )}
    >
      <LoadingAnimate />
    </div>
  );
}

export default Loading;
