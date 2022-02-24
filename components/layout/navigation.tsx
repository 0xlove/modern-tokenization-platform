import styled from 'styled-components';
import {theme} from 'styles/theme';
import {useTranslation} from 'react-i18next';
import React from 'react';
import NavLink from '../nav-link';

interface NavigationProps {
  vertical?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({vertical}) => {
  const {t} = useTranslation('common');

  return (
    <Nav vertical={vertical}>
      <NavLink href="/#projects">{t('products')}</NavLink>
      <NavLink href="/#exchanges">{t('exchanges')}</NavLink>
      <NavLink href="/#partners">{t('partners')}</NavLink>
    </Nav>
  );
};

export default Navigation;

const A = styled.a`
  text-decoration: none;
  color: inherit;

  transition: color 300ms ease-in-out;

  &:hover {
    color: ${theme.colors.hoverText}
  }
`;

const Nav = styled.nav<NavigationProps>`
  display: flex;

  ${A} + ${A} {
    margin-left: 2.2em;
  }

  ${({vertical}) => vertical && `
    flex-direction: column;
    padding: 12px 12px 13px;
    text-align: center;

    & > a {
      padding: 10px;
    }
  `}
`;

