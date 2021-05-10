import styled from 'styled-components';
import colors from '../../styles/colors';

export const Wrapper = styled.div`
  margin-top: 20px;
  text-align: center;
  width: 100%;
`;

export const Header = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
  width: 100%;
`;

export const Select = styled.select`
  background-color: ${colors.blue};
  color: ${colors.white};
  height: 27px;
  width: 180px;
`;
