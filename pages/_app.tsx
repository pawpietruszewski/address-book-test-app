import type { AppProps } from 'next/app';
import Layout from '../src/layouts/main';

import { TITLE } from '../src/constant/meta';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout title={TITLE}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
