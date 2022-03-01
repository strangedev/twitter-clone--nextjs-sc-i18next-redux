import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SSRConfig } from 'next-i18next';
import styled from 'styled-components';
import { Trans } from '@nhummel/react-i18next-fluent';
import { GetStaticPropsContext, GetStaticPropsResult, NextPage } from 'next';
import React, { Fragment, ReactElement } from 'react';

export const getStaticProps = async function ({ locale }: GetStaticPropsContext): Promise<GetStaticPropsResult<SSRConfig>> {
  return {
    props: {
      ...await serverSideTranslations(locale!, [ 'common' ])
    }
  };
};

const Headline = styled.h1`
  font-size: x-large;
`;

const Slogan = styled.p`
  font-size: large;
`;

const Emphasis = styled.i`
  font-style: italic;
`;

const Landing: NextPage = function (): ReactElement {
  return (
    <Trans
      namespace='common'
      translation='greeting'
      components={{
        Headline,
        Slogan,
        Emphasis
      }}
      interpolations={{
        accountsCount: 1_337
      }}
    >
      {
        (t, { accountsCount }): ReactElement => (
          <Fragment>
            <t.Headline>Welcome to Twötter!</t.Headline>
            <t.Slogan>
              Home of <t.Emphasis>hot takes</t.Emphasis> and <t.Emphasis>{ accountsCount } cool accounts!</t.Emphasis>
            </t.Slogan>
          </Fragment>
        )
      }
    </Trans>
  );
};

export default Landing;
