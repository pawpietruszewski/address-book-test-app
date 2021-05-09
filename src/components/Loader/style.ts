import styled from 'styled-components';
import colors from '../../styles/colors';

export default styled.div`
  font-size: 20px;
  width: 100%;
  text-align: center;
  color: ${colors.black};
  padding: 5px 0;
  opacity: ${({ show }: { show?: boolean }) => (show ? 'true' : 'false')}
`;
