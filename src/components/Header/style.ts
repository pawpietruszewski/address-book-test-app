import styled from 'styled-components';
import colors from '../../styles/colors';
import breakpoints from '../../styles/breakpoints';

export const LogoWrapper = styled.div`
  svg {
    width: 50px;
    fill: ${colors.black};
  }
`;

export const Title = styled.h1`
  font-size: 15px;
  color: ${colors.black};

  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }
`;

export const Top = styled.div`
  width: 100%;
  text-align: center;
`;
