import { ServerStyleSheet } from 'styled-components';
import { AppPropsType, AppType, DocumentInitialProps, Enhancer, RenderPage } from 'next/dist/shared/lib/utils';
import Document, { DocumentContext } from 'next/document';
import React, { ReactElement } from 'react';

export default class MyDocument extends Document {
  public static async getInitialProps (ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    const enhancedRenderPage = function (): ReturnType<RenderPage> {
      const enhanceApp: Enhancer<AppType> =
        (App: AppType): AppType =>
          (props: AppPropsType): ReactElement =>
            sheet.collectStyles(<App { ...props } />);

      return originalRenderPage({
        enhanceApp
      });
    };

    try {
      // eslint-disable-next-line no-param-reassign
      ctx.renderPage = enhancedRenderPage;
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <React.Fragment>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </React.Fragment>
        )
      };
    } finally {
      sheet.seal();
    }
  }
}
