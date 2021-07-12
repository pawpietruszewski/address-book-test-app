import type { AppProps } from 'next/app';
import { SettingsProvider } from 'src/contexts/settingsContext';
import Layout from 'src/layouts/main';

import { TITLE } from 'src/constant/meta';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SettingsProvider>
      <Layout title={TITLE}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Layout>
    </SettingsProvider>
  );
}

export default MyApp;
