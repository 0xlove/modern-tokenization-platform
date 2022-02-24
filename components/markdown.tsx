import styled from 'styled-components';
import {breakpoints} from './grid/consts';

const MarkdownContainer = styled.div`
  line-height: 160%;
  font-size: clamp(1rem, 1.25vw, 1.5rem);

  @media ${breakpoints.down(breakpoints.md)} {
    padding: 0 10px;
  }
  
  & > p {
    padding: 20px 0;
  }

  & > h1, h2, h3, h4, h5, h6 {
    color: #4E60F4;
    padding: 20px 0;
  }

  & > a, p a {
    text-decoration: none;
    color: #CF5BDB;
  }

  a + a {
    margin-left: 40px;
  }

  strong {
    color: #CF5BDB;
  }

  li {
    position: relative;
    text-indent: 20px;
  }

  li::first-line {
    position: relative;
    display: block;
  }

  li:before {
    position: absolute;
    content: '◆';
    color: #CF5BDB;
    left: -20px;
  }

`;

export default MarkdownContainer;
