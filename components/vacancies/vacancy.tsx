/* eslint-disable react/no-children-prop */
import {Vacancy} from 'src/interface';
import styled, {css} from 'styled-components';
import Link from 'next/link';
import {Paragraph2} from 'components/typography';
import Button from 'components/button';
import {useState} from 'react';
import ReactMarkdown from 'react-markdown';
import {breakpoints} from 'components/grid/consts';

import arrow from '@/images/bottomArrow.png';
import MarkdownContainer from 'components/markdown';
import router from 'next/router';

interface VacancyCardProps {
  vacancy: Vacancy;
}

const VacancyCard: React.FC<VacancyCardProps> = ({vacancy}) => {
  const {slug, short_description, address, name} = vacancy;
  
  const [openDescription, setOpenDescription] = useState<boolean>(false);

  return ( 
    <Root>
      <Card>
        <NameContainer>
          <Link href={`vacancy-pages/${slug}`} passHref>
            <CardLink>{name}</CardLink>
          </Link>
          <Paragraph2>{address}</Paragraph2>
        </NameContainer>
        <StyledButton 
          onClick={() => {
            setOpenDescription(!openDescription);
          }}
          isActive={openDescription}
        > 
          <Arrow isActive={openDescription} src={arrow.src} />
        </StyledButton>
      </Card>
      <Description isActive={openDescription}>
        <MarkdownContainer>
          <ReactMarkdown>
            {short_description}
          </ReactMarkdown>
        </MarkdownContainer>
        <Button primary onClick={() => {
          router.push(`vacancy-pages/${slug}`);
        }}>Apply</Button>
      </Description>
    </Root>
  );
};

export default VacancyCard;

const Card = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${breakpoints.down(breakpoints.md)} {
    flex-direction: row-reverse;
    padding: 0 15px;
    align-items: center;
  }
`;

const Root = styled.div`
  position: relative;
  padding: min(30px, 1.5vw) 0;
  
  &::after {
    position: absolute;
    content: '';
    top: 0;
    width: 100%;
    height: 1px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%2336324BFF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  }
`;

const CardLink = styled.a`
  font-size: clamp(1rem, 1vw, 1.25rem);
  color: #4E60F4;
  text-decoration: none;
  margin-right: 20px;

  @media ${breakpoints.down(breakpoints.md)} {
    margin-right: 0;
  }
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;

  @media ${breakpoints.down(breakpoints.md)} {
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
  }
`;

const Arrow = styled.img<Active>`
  width: 12px;
  height: 6px;

  transition: transform 300ms ease-in-out;

  ${props => props.isActive && css`
    transform: rotate(180deg);
  `}

`;

const StyledButton = styled.button<Active>`
  width: 104px;
  height: 60px;
  margin: 0;
  background-color: #22202F;
  border: unset;
  border-radius: 100px;

  transition: background-color 300ms ease-in-out;

  ${props => props.isActive && css`
    background-color: #36324B;
  `}

  @media ${breakpoints.down(breakpoints.md)} {
    width: 35px;
    height: 20px;
  }
`;

interface Active {
  isActive: boolean,
}

const Description = styled.div<Active>`
  position: relative;
  height: ${({isActive}) => isActive ? 'auto' : '0'};

  margin-top:  ${({isActive}) => isActive ? '30px' : '0'};
  padding: ${({isActive}) => isActive ? '30px 0' : '0'};;
  overflow: hidden;

  &:before {
    position: absolute;
    content: '';
    top: 0;
    width: 100%;
    height: 1px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%2336324BFF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  }
`;
