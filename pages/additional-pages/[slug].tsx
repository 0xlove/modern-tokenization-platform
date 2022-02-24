import componentsManager from 'components/additional-pages/blockManager';
import Root from 'components/root';
import {GetServerSideProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Layout from 'pages/layout';
import {AdditionalPageProps} from 'src/interface';
import getDataFromServer from 'utils';

const AdditionalPage: React.FC<AdditionalPageProps> = ({pageData}) => {
  
  return (
    <Layout>
      <Root>
        {pageData && componentsManager(pageData.page_content)}
      </Root>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {locale} = context;
  const {slug} = context.query;

  const pageData = await getDataFromServer(`additional-pages/${slug}`);
  
  return {
    props: {
      ...(await serverSideTranslations(
        locale ? locale: 'en',
        ['index', 'common',]
      )),
      pageData,
    }
  };
};

export default AdditionalPage;

