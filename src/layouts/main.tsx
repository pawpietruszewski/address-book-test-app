import React, { ReactElement } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { Main } from './style';
import GlobalStyles from '../styles/globalStyles';

interface MainProps {
  children: ReactElement | ReactElement [];
  title: string;
  description?: string;
}

const main = ({
  children,
  title,
  description = '',
}: MainProps): JSX.Element => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>{ title }</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta content={description} name="description" />
      <script src="public/js/modernizr.js" />
      <link rel="apple-touch-icon" sizes="180x180" href="public/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="public/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="public/favicons/favicon-16x16.png" />
      <link rel="manifest" href="public/favicons/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <GlobalStyles />
    <Header title={title} />
    <Main id="main">
      { children }
    </Main>
  </>
);

export default main;
