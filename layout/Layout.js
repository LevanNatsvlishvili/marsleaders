import React, { useEffect } from 'react';
import Scroll from './Scroll';
import useStore from 'context';
import Loading from 'components/Loading';
import { useRouter } from 'next/router';

function useQuery() {
  const location = useRouter();
  if (location.pathname.length <= 1) {
    return true;
  }
  return false;
}

const Layout = ({ children }) => {
  const { currView, setCurrView, loading } = useStore();
  const shouldScrollDisplay = useQuery();

  useEffect(() => {
    if (shouldScrollDisplay) {
      setCurrView(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldScrollDisplay]);

  return (
    <div className="relative bg-secondary">
      <Loading loading={loading} />
      <div className="h-6-0 bg-black/30 w-full fixed z-20"></div>
      <Scroll
        shouldScrollDisplay={true}
        currView={currView}
        setCurrView={setCurrView}
      >
        <main className="flex ">{children}</main>
      </Scroll>
    </div>
  );
};

export default Layout;
