import styled from 'styled-components';
import {StrapiImage} from 'src/interface';
import {theme} from 'styles/theme';
import {getStrapiMedia}  from 'utils/api';
import {breakpoints} from 'components/grid/consts';

interface ExchangesCardProps {
  exchange: {logo: StrapiImage};
};

export const ExchangesCard: React.FC<ExchangesCardProps> = ({exchange}) => {
  
  const logoUrl = getStrapiMedia(exchange.logo.url);
    
  return <Card>
    <Image 
      src={logoUrl ? logoUrl : ''}
      alt={exchange.logo.alternativeText}
    />
  </Card>;
};

const Card = styled.div`
  display: grid;
  place-items: center;

  width: 100%;
  height: 100px;
  background-color: ${theme.colors.primaryBG};
  border-radius: 24px;

  @media ${breakpoints.down(breakpoints.md)} {
    height: 50px;
  }
`;

const Image = styled.img`
  max-width: 80%;
  max-height: 90%;

  @media ${breakpoints.down(breakpoints.md)} {
    width: 50px;
  }
`;
