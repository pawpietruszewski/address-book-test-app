import styled from 'styled-components';
import colors from 'src/styles/colors';
import mixins from 'src/styles/mixins';
import breakpoints from 'src/styles/breakpoints';

export const Tile = styled.div`
  border-radius: 20px;
  border: 1px solid ${colors.black};
  box-sizing: border-box;
  cursor: pointer;
  flex: 0 0 100%;
  margin: 10px 0;
  padding: 20px;

  @media screen and (min-width: ${breakpoints.mobile}) {
    flex: 0 0 calc(20% - 20px);
    margin: 10px;
  }
`;

export const ImageWrapper = styled.div`
  padding-top: 100%;
  position: relative;
  width: 100%;

  img {
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  margin: auto;
  max-width: 128px;
  width: 100%;
`;

export const Data = styled.ul`
  margin: auto;
  max-width: 270px;
  padding-top: 20px;
  text-align: center;
  width: 100%;
`;

export const Item = styled.li`
  font-weight: bold;
  padding: 3px 20px;

  span {
    font-weight: normal;
    padding-left: 5px;
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  
`;

export const CloseModal = styled.button`
  height: 20px;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 20px;
  
  span {
    ${mixins.visuallyHidden}
  }

  &::after {
    background-color: ${colors.black};
    content: '';
    height: 2px;
    left:0;
    position: absolute;
    top: 50%;
    transform: rotate(45deg);
    width: 20px;
  }

  &::before {
    background-color: ${colors.black};
    content: '';
    height: 2px;
    left:0;
    position: absolute;
    top: 50%;
    transform: rotate(-45deg);
    width: 20px;
  }

`;
