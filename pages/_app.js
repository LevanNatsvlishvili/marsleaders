import Layout from 'layout';
import 'styles/globals.css';
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
