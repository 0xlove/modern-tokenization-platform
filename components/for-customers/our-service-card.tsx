interface ServicesCardProps {
  serviceName: string;
  serviceLogo: StaticImageData
}

import * as S from './our-service-card.styled';

const ServicesCard: React.FC<ServicesCardProps> = (
  {serviceName, serviceLogo}
) => {
  return <S.OurServiceCard>
    <S.LogoContainer>
      <S.Image src={serviceLogo.src} alt={serviceName}/>
    </S.LogoContainer>
    <p>{serviceName}</p>
  </S.OurServiceCard>;
};

export default ServicesCard;
