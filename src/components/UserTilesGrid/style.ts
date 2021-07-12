import styled from 'styled-components';

export const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
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
