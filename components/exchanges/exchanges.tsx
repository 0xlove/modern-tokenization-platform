import {breakpoints} from 'components/grid/consts';
import {StrapiImage} from 'src/interface';
import styled from 'styled-components';
import {ExchangesCard} from './exchanges-card';

interface ExchangesProps {
  exchanges: {
    id: number;
    logo: StrapiImage
  }[]
}

const Exchanges: React.FC<ExchangesProps> = ({exchanges}) => {
  return <ExchangesContainer>
    {exchanges.map(el => (
      <ExchangesCard key={el.id} exchange={el}/>
    ))}
  </ExchangesContainer>;
};

const ExchangesContainer = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(5, clamp(132px, 11.3vw, 240px));

  @media ${breakpoints.down(breakpoints.lg)} {
    grid-template-columns: repeat(4, clamp(132px, 11.3vw, 240px));
  }

  @media ${breakpoints.down(breakpoints.md)} {
    grid-template-columns: repeat(2, clamp(132px, 11.3vw, 240px));
    gap: 10px;
  }
`;

export default Exchanges;
