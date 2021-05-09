import React from 'react';
import Link from 'next/link';
import Logo from '../Logo'; // eslint-disable-line import/no-unresolved

import {
  LogoWrapper,
  Title,
  Top,
  Nav,
  NavItem,
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
    <Nav>
      <NavItem>
        <Link href="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link href="/settings">Settings</Link>
      </NavItem>
    </Nav>
  </>
);

export default Header;
