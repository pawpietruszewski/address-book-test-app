import type { AppProps } from 'next/app';
import Layout from '../src/layouts/main';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
