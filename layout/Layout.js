import React, { useEffect } from 'react';
import useStore from 'context';
import Loading from 'components/Loading';
import Header from './Header';

const Layout = ({ children }) => {
  const { loading, setLoading } = useStore();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative bg-secondary h-100-vh">
      <Loading loading={loading} />

      <Header />

      <main className="flex lg:h-100-vh">{children}</main>
    </div>
  );
};

export default Layout;
