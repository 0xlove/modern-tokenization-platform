import {breakpoints} from 'components/grid/consts';
import styled from 'styled-components';

const FooterDescription: React.FC = () => {
  return (
    <Root>
      <Description>
        Saw yet kindness too replying whatever marianne. 
        Old sentiments resolution admiration unaffected its mrs
        literature. Behaviour new set existence dashwoods. It satisfied to mr
        commanded consisted disposing engrossed. Tall snug do of till on easy.
        Form not calm new fail. 
      </Description>
      <Description>
        Saw yet kindness too replying whatever marianne. 
        Old sentiments resolution admiration unaffected its mrs literature. 
      </Description>
    </Root>
  );
};

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  width: 100%;

  @media ${breakpoints.down(breakpoints.lg)} {
    grid-template-columns: 1fr;
  }
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

export default FooterDescription;
