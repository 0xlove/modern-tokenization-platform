import styled from 'styled-components';
import Link from 'next/link';
import {breakpoints} from 'components/grid/consts';

const FooterNavigation: React.FC = () => {
  return (
    <Nav>
      <Link href='/vacancies' passHref>
        <A>Job</A>
      </Link>
      <Link href='/chart' passHref>
        <A>Privacy</A>
      </Link>
      <Link href='/' passHref>
        <A>Rules</A>
      </Link>
      <Link href='/blog' passHref>
        <A>Blog</A>
      </Link>
    </Nav>
  );
};

export default FooterNavigation;

const A = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: clamp(1rem, 1.250vw, 1.25rem);
  font-weight: 600;

  transition: color 200ms ease-in-out;

  &:hover {
    color: #4E60F4
  }

  @media ${breakpoints.down(breakpoints.lg)} {
    font-size: 20px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  ${A} + ${A} {
    margin-left: 2.2em;
  }

  @media ${breakpoints.down(breakpoints.md)} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    justify-items: center;

    ${A} + ${A} {
      margin-left: unset;
      align-items: center;
    }
  }

`;

