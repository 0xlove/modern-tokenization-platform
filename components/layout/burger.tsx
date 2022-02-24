/* eslint-disable @next/next/no-img-element */
import React, {useState} from 'react';
import styled from 'styled-components';

import {breakpoints} from '../grid/consts';
import IconButton from '../icon-button';
import menuIcon from '../../images/menu.svg';
import MobileMenu from './mobile-menu';

const Burger: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const openHandler = () => {
    setOpenMenu(true);
  };

  const closeHandler = () => {
    setOpenMenu(false);
  };

  return <>
    <BurgerMenu>
      <IconButton onClick={openHandler}>
        <img src={menuIcon.src} alt="menu" width={20} height={20} />
      </IconButton>
    </BurgerMenu>
    <MobileMenu isOpen={openMenu} burgerClose={closeHandler}/>
  </>;
};

const BurgerMenu = styled.div`
  position: absolute;
  right: 15px;
  width: 20px;
  display: none;

  @media ${breakpoints.down(breakpoints.lg)} {
    display: block;
  }
`;

export default Burger;
