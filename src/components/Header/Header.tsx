import React from 'react';
import Link from 'next/link';
import Logo from '../Logo'; // eslint-disable-line import/no-unresolved

import {
  LogoWrapper,
  Title,
} from './style';

const Header = ({
  title,
}: { title: string }): JSX.Element => (
  <>
    <LogoWrapper>
      <Link href="/"><a><Logo /></a></Link>
    </LogoWrapper>
    <Title>
      {title}
    </Title>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  </>
);

export default Header;
