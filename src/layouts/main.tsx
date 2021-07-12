import React, { ReactElement } from 'react';
import Head from 'next/head';
import Header from 'src/components/Header';
import GlobalStyles from 'src/styles/globalStyles';
import { Main } from './style';

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
