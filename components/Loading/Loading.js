import clsx from 'clsx';
import LoadingAnimate from 'components/Animations/Loading';
import React from 'react';

function Loading(props) {
  const { loading } = props;

  return (
    <div
      className={clsx(
        `bg-black z-50 w-full h-full flex justify-center items-center absolute`,
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
