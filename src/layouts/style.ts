import styled from 'styled-components';
import colors from '../styles/colors';
import breakpoints from '../styles/breakpoints';

export const Main = styled.main`
  background-color: ${colors.white};
  height: 100%;
  min-height: 100vh;
  width: 100%;

  @media screen and (max-width: ${breakpoints.mobile}) {
    padding-bottom: 80px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;
