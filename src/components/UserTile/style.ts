import styled from 'styled-components';
import colors from '../../styles/colors';
import mixins from '../../styles/mixins';
import breakpoints from '../../styles/breakpoints';

export const Tile = styled.div`
  flex: 0 0 20%;
  border: 1px solid ${colors.black};
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;
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
  max-width: 128px;
  width: 100%;
  margin: auto;
`;

export const Data = styled.ul`
  padding-top: 20px;
  text-align: center;
  width: 100%;
`;

export const Item = styled.li`
  padding: 3px 20px;
  font-weight: bold;

  span {
    font-weight: normal;
    padding-left: 5px;
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  
`;

export const CloseModal = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  
  span {
    ${mixins.visuallyHidden}
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left:0;
    width: 20px;
    height: 2px;
    background-color: ${colors.black};
    transform: rotate(45deg);
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left:0;
    width: 20px;
    height: 2px;
    background-color: ${colors.black};
    transform: rotate(-45deg);
  }

`;
