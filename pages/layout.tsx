import Footer from 'components/layout/footer';
import {NextPage} from 'next';
import styled from 'styled-components';
import Header from '../components/layout/header';

const Layout: NextPage = ({children}) => {
  return <>
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </>;
};

export default Layout;

const Main = styled.main`
  min-height: 70vh;
`;
