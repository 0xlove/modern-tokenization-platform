import styled from 'styled-components';

export const Label = styled.label<{required?: boolean}>`
  font-family: inherit;
  font-size: clamp(1.2rem, 1.250vw, 1.5rem);
  line-height: 160%;
  display: block;
  margin: 40px 0 16px;

  ${({required}) => required && `
    &:after {
      content: ' *';
      color: #CF5BDB;
    }
  `}
`;
