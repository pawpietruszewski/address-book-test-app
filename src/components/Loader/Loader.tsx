import React from 'react';
import Wrapper from './style';

interface LoaderProps {
  show: boolean,
  end: boolean,
}

const Loader = ({
  end = false,
  show = false,
}: LoaderProps): JSX.Element => (
  <Wrapper show={show}>
    {end ? 'End of users catalog' : 'Loading...'}
  </Wrapper>
);

export default Loader;
