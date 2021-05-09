import React from 'react';
import Link from 'next/link';
import Logo from '../Logo'; // eslint-disable-line import/no-unresolved

import {
  LogoWrapper,
  Title,
  Top,
} from './style';

const Header = ({
  title,
}: { title: string }): JSX.Element => (
  <>
    <Top>
      <LogoWrapper>
        <Link href="/"><a><Logo /></a></Link>
      </LogoWrapper>
      <Title>
        {title}
      </Title>
    </Top>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/search">Search</Link>
      </li>
      <li>
        <Link href="/settings">Settings</Link>
      </li>
    </ul>
  </>
);

export default Header;
