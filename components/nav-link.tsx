import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import {LinkText} from './typography';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({href, children}) => {
  return (
    <Link href={href} passHref>
      <NavLinkAnchor>
        <LinkText>
          {children}
        </LinkText>
      </NavLinkAnchor>
    </Link>
  );
};

export default NavLink;

const NavLinkAnchor = styled.a`
  text-decoration: none;
  padding: 0 1.1em;
`;
