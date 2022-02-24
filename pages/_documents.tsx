/* eslint-disable react/display-name */
import Document, {DocumentContext, DocumentInitialProps, Main, NextScript, Html, Head} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {

    return(
      <Html>
        <Head>
          <link
            rel='preload' 
            href='fonts/Montserrat-Ace/Montserrat-Ace-Regular.otf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload' 
            href='fonts/Montserrat-Ace/Montserrat-Ace-Medium.otf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload' 
            href='fonts/Montserrat-Ace/Montserrat-Ace-SemiBold.otf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload' 
            href='fonts/Montserrat-Ace/Montserrat-Ace-Bold.otf'
            as='font'
            crossOrigin='' 
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
