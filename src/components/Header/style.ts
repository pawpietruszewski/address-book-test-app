import styled from 'styled-components';
import colors from 'src/styles/colors';
import breakpoints from 'src/styles/breakpoints';

export const LogoWrapper = styled.div`
  svg {
    fill: ${colors.black};
    width: 50px;
  }
`;

export const Title = styled.h1`
  color: ${colors.black};
  font-size: 15px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }
`;

export const Top = styled.div`
  padding-top: 20px;
  text-align: center;
  width: 100%;
`;

export const Nav = styled.ul`
  padding-top: 20px;
  text-align: center;
  width: 100%;
`;

export const NavItem = styled.li`
  display: inline-block;
  padding: 0 20px;

  a {
    color: ${colors.blue};
    text-decoration: none;
  }
`;
