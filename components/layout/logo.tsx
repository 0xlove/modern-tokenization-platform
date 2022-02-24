import Image from 'next/image';

import logoSrc from '@/images/logo.png';
import styled from 'styled-components';
import {breakpoints} from 'components/grid/consts';

const Logo: React.FC = () => (
  <LogoImg
    src={logoSrc.src}
    width={logoSrc.width}
    height={logoSrc.height}
    alt="TGT logo"
  />
);

export default Logo;

const LogoImg = styled.img`
  width: 168px;
  height: 52px;

  @media ${breakpoints.down(breakpoints.lg)} {
    width: 142px;
    height: 44px;
  }
`;
