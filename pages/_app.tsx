import type {AppProps} from 'next/app';
import {appWithTranslation} from 'next-i18next';
import GlobalStyles from '../styles/globalStyles';
import {ThemeProvider} from 'styled-components';
import {theme} from '../styles/theme';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default appWithTranslation(MyApp);
