import {Header2, Header3} from 'components/typography';
import {Vacancy} from 'src/interface';
import styled from 'styled-components';
import VacancyCard from './vacancy';

interface CategoryProps {
  name: string;
  vacancies: Vacancy[];
}

const Category: React.FC<CategoryProps> = ({name, vacancies}) => {
  return ( 
    <Root>
      <Header>{name}</Header>
      {vacancies && vacancies.map(vacancy => {
        return (
          <VacancyCard vacancy={vacancy} key={vacancy.id}/>
        );
      })}
    </Root>
  );
};

export default Category;

const Root = styled.div`
  position: relative;
  
  &::before {
    position: absolute;
    width: 170%;
    content: '';
    bottom: 0;
    left: -35%;
    height: 1px;
    background-color: #36324B;
  }
`;

const Header = styled(Header3)`
  padding: 30px 0; 
`;
