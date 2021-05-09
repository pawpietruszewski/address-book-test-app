import styled from 'styled-components';
import colors from '../../styles/colors';
import breakpoints from '../../styles/breakpoints';

export const Title = styled.h1`
  font-size: 20px;
  color: ${colors.red};

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const LogoWrapper = styled.div`
  svg {
    width: 100px;
    fill: green;
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 10px;
  }
`;
