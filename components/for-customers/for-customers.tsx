import styled from 'styled-components';

import auditImg from '@/images/service1.png';
import revisionImg from '@/images/service2.png';
import marketingImg from '@/images/service3.png';
import listingImg from '@/images/service4.png';

import ServicesCard from './our-service-card';
import {breakpoints} from 'components/grid/consts';

const ForCustomers: React.FC = () => {
  return <ServicesContainer>
    <ServicesCard serviceLogo={auditImg} serviceName='Audit'/>
    <ServicesCard serviceLogo={revisionImg} serviceName='Revision'/>
    <ServicesCard serviceLogo={marketingImg} serviceName='Marketing '/>
    <ServicesCard serviceLogo={listingImg} serviceName='Listing'/>
  </ServicesContainer>;
};

const ServicesContainer = styled.div`
  display: flex;
  gap: 32px;
  justify-self: center;
  height: clamp(133px, 12.5vw, 240px);

  div:nth-child(2n) {
    align-self: flex-end;
  }

  @media ${breakpoints.down(breakpoints.md)} {
    display: grid;
    height: unset;
    grid-template-columns: 1fr 1fr;
    gap: 20px
  }
`;

export default ForCustomers;
