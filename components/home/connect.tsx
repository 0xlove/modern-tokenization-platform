import {breakpoints} from 'components/grid/consts';
import styled from 'styled-components';

const Connect: React.FC = () => {
  return (
    <Root>
      <span>
        Connect to{' '}<em>thousands</em>{' '}of
        users who get access to
        private information earlier
        than millions of others
      </span>
    </Root>
  );
};

export default Connect;

const Root = styled.div`
  height: 100%;
  box-sizing: border-box;
  font-style: normal;
  font-weight: bold;
  font-size: clamp(1.25rem, 2vw, 2.2vw);
  line-height: 130%;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #FFFFFF;
  position: relative;
  margin-left: 15px;

  @media ${breakpoints.down(breakpoints.lg)} {
    text-align: center;
    margin-top: 50px;
    margin-left: 0;
  }

  em {
    color: #CF5BDB;
  }

  &:before {
    content: '';
    position: absolute;
    height: 60px;
    width: 5px;
    left: -15px;
    top: 50%;
    transform: translate(-2px, -50%);
    background: #4E60F4;
    border-radius: 100px;

    @media ${breakpoints.down(breakpoints.lg)} {
      display: none;
    }
  }
`;
