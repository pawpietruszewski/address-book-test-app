import styled from 'styled-components';
import colors from '../../styles/colors';
import breakpoints from '../../styles/breakpoints';

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

  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }

  form {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${breakpoints.tablet}) {
      display: block;
    }
  }
`;

export const Button = styled.button`
  background-color: ${colors.blue};
  border: 1px solid ${colors.white};
  color: ${colors.white};
  cursor: pointer;
  line-height: 15px;
  margin: 15px auto 0;
  padding: 5px 40px;
  width: 200px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: auto;
    margin-left: 5px;
  }
`;

export const Input = styled.input`
  border: 1px solid ${colors.blue};
  display: block;
  line-height: 15px;
  margin: 10px auto 0;
  padding: 5px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    display: inline-block;
    margin-left: 10px;
  }
`;
