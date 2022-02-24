import {GetServerSideProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import ApplyForJob from '../components/apply-for-job';
import Layout from './layout';

const ApplyForJobPage: React.FC = () => {
  return (
    <Layout>
      <ApplyForJob />
    </Layout>
  );
};

export default ApplyForJobPage;

export const getServerSideProps: GetServerSideProps = async(context) => {
  const {locale} = context;

  return {
    props: {
      ...(await serverSideTranslations(
        locale ? locale: 'en',
        ['index', 'applyForJob',]
      )),
    },
  };
};
