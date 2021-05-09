import styled from 'styled-components';
import colors from '../../styles/colors';

export const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  background-color: ${colors.white};
  text-align: center;
  margin: auto;
  position: sticky;
  top: 0;
  z-index: 1;
  box-sizing: border-box;
  border-bottom: 1px solid ${colors.grey};
`;

export const Button = styled.button`
  border: 1px solid ${colors.white};
  line-height: 15px;
  color: ${colors.white};
  padding: 5px 40px;
  margin-left: 5px;
  background-color: ${colors.blue};
  cursor: pointer;
`;

export const Input = styled.input`
  border: 1px solid ${colors.blue};
  line-height: 15px;
  padding: 5px;
  margin-left: 10px;
`;
