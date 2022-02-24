import {Container, Row, Col} from 'components/grid';
import {VacanciesProps} from 'pages/vacancies';
import styled from 'styled-components';
import Category from './category';

const Vacancies: React.FC<VacanciesProps> = ({vacancies}) => {
  
  const allCategories = vacancies
    .filter(vacancy => vacancy.categories)
    .map(vacancy => vacancy.categories.job_specialization.name);
  
  const uniqCategories = new Set(allCategories);

  const uniqList = [...uniqCategories.values()];
  
  return (
    <Container>
      <SRow>
        {uniqList.map(item => {
          return (
            <Col key={item} lg={9}>
              <Category 
                name={item}
                vacancies={
                  vacancies
                    .filter(vacancy => vacancy.
                      categories.job_specialization.name === item)}
              />
            </Col>
          );
        })}
      </SRow>
    </Container>
  );
};

const SRow = styled(Row)`
  justify-content: center;
`;

export default Vacancies;
