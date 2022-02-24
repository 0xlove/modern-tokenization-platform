import Root from 'components/root';
import {GetServerSideProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Layout from 'pages/layout';
import {Vacancy} from 'src/interface';
import getDataFromServer from 'utils';
import Header from 'components/vacancies/header';
import PageContent from 'components/blog-page/page-content';
import ApplyForJob from 'components/apply-for-job';

interface VacancyPageProps {
  vacancy: Vacancy
}

const VacancyPage: React.FC<VacancyPageProps> = ({vacancy}) => {
  const {
    name,
    address,
    full_description
  } = vacancy;

  return ( 
    <Layout>
      <Root>
        <Header 
          name={name}
          address={address}
        />
      </Root>
      <PageContent content={full_description}/>
      <ApplyForJob />
    </Layout>
  );
};

export default VacancyPage;

export const getServerSideProps: GetServerSideProps = async(context) => {
  const {locale, query} = context;

  const {slug} = query;

  const vacancy = await getDataFromServer(`vacancies/${slug}`);

  return {
    props: {
      ...(await serverSideTranslations(
        locale ? locale : 'en',
        ['common', 'applyForJob']
      )),
      vacancy,
    }
  };
};
