import {MainHeadline} from 'components/additional-pages/strapi';
import Layout from './layout';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import staticImage from '@/images/vacancies.jpg';
import Root from 'components/root';
import {GetServerSideProps} from 'next';
import getDataFromServer from 'utils';
import {Vacancy} from 'src/interface';
import Vacancies from 'components/vacancies/vacancies';
import {Container, Row, Col} from 'components/grid';

export interface VacanciesProps {
  vacancies: Vacancy[]
}

const VacanciesPage: React.FC<VacanciesProps> = ({vacancies}) => {
  
  return ( 
    <Layout>
      <Root>
        <MainHeadline 
          headline='Job Openings'
          description={`
            We are currently hiring for the following roles.
            If you think you might be a good fit, we’d love to hear from you. 
          `}
          staticImage={staticImage.src}
          hasBackground
        />
      </Root>
      <Vacancies vacancies={vacancies}/>    
    </Layout>
  );
};

export default VacanciesPage;

export const getServerSideProps: GetServerSideProps = async(context) => {
  const {locale} = context;

  const vacancies = await getDataFromServer('vacancies');

  return {
    props: {
      ...(await serverSideTranslations(
        locale? locale: 'en',
        ['common']
      )),
      vacancies,
    }
  };
};
