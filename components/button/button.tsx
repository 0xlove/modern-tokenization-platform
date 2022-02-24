import {breakpoints} from 'components/grid/consts';
import {ButtonText} from 'components/typography';
import styled from 'styled-components';

export interface ButtonProps {
  primary?: boolean;
  children: React.ReactNode;
  primaryContent?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  active?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = props => {
  return (
    <StyledButton {...props}>
      <ButtonContent {...props}>
        <ButtonText>
          {props.children}
        </ButtonText>
      </ButtonContent>
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<ButtonProps>`
  border: none;
  padding: 0;
  margin: 0.365vw 0.83vw;
  box-sizing: border-box;
  width: 240px;
  height: 60px;
  position: relative;
  border-radius: 100px;
  background: #22202F;
  cursor: pointer;

  ${({disabled}) => disabled && `
    pointer-events: none;
    cursor: initial;
  `}

  ${({primary}) => primary && `
    background: linear-gradient(
      274.26deg, #4E60F4 0%, #CF5BDB 101.33%
    );
  `}

  @media ${breakpoints.down(breakpoints.lg)} {
    width: 190px;
  }
`;

const ButtonContent = styled.span<ButtonProps>`
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  left: 2px;
  border-radius: inherit;
  background: ${({primaryContent}) => primaryContent
    ? 'linear-gradient(274.26deg, #4E60F4 0%, #CF5BDB 101.33%);' : '#22202F'};
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  z-index: 1;

  &:before {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${({primaryContent, primary}) => primaryContent
    ? '#22202F' : 'linear-gradient(274.26deg, #4E60F4 0%, #CF5BDB 101.33%)'};
    border-radius: inherit;
    opacity: 0;
    z-index: -1;
    transition: opacity 400ms ease-in-out;
  }

  &:hover :before {
    opacity: ${({primary}) => !primary ? 0 : 1};
  }
`;
