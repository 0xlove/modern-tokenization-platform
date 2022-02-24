/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from 'styled-components';

import Button from '../button';
import closeIcon from '../../images/close.svg';
import LanguageSelect from './languageSelect';
import Navigation from './navigation';
import Logo from './logo';
import IconButton from '../icon-button';

interface MobileMenuProps {
  isOpen: boolean;
  burgerClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({isOpen, burgerClose}) => {
  return (
    <MenuContainer isOpen={isOpen}>
      <Menu isOpen={isOpen}>
        <Header>
          <Logo />

          <IconButton onClick={burgerClose}>
            <img src={closeIcon.src} alt="close" width={17} height={17} />
          </IconButton>
        </Header>

        <Navigation vertical />

        <ActionsContainer>
          <LanguageSelect />
          <Button primary>Sing in</Button>
          <Button primary primaryContent>Get started</Button>
        </ActionsContainer>
      </Menu>
    </MenuContainer>
  );
};

type MenuProps = {
  isOpen: boolean;
}

const MenuContainer = styled.div<MenuProps>`
  visibility: ${({isOpen}) => isOpen ? 'visible' : 'hidden'};
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;

  display: flex;
  justify-content: flex-end;

  z-index: 9990;
`;

const Menu = styled.div<MenuProps>`
  width: ${({isOpen}) => isOpen ? '80vw': '0'};
  height: 100vh;
  z-index: 10000;
  background: #382244;
`;

const Header = styled.div`
  margin: 0 1rem;
  padding: 12px 0 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 23px;

  & > * {
    margin-bottom: 25px;
  }
`;

export default MobileMenu;
