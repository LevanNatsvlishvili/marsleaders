import Layout from 'layout';
import 'styles/globals.css';
import 'styles/sass/style.scss';
import { StoreContextProvider } from 'context';

function MyApp({ Component, pageProps }) {
  return (
    <StoreContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreContextProvider>
  );
}

export default MyApp;
