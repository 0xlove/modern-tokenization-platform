import Home from '../components/home/home';
import type {GetServerSideProps, NextPage} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import React from 'react';

import Layout from './layout';
import getDataFromServer from 'utils';
import {HomeProps} from 'src/interface';

const HomePage: React.FC<HomeProps> = ({exchanges, projects}) => {
  return (
    <Layout>
      <Home 
        exchanges={exchanges}
        projects={projects}
      />
    </Layout>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async(context) => {

  const {locale} = context;

  const exchanges = await getDataFromServer('exchanges');
  const projects = await getDataFromServer('projects');
  
  return {
    props: {
      ...(await serverSideTranslations(
        locale ? locale: 'en',
        ['index', 'common',]
      )),
      exchanges,
      projects
    }
  };
};

