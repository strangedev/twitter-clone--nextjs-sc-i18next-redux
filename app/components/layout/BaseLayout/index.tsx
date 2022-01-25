import { ComponentFactoryArgs } from '../../../styling/helpers/ComponentFactoryArgs';
import { InferComponentThemeOf } from '../../../styling/helpers/InferComponentThemeOf';
import { Settings } from '../../../styling/Settings';
import styled from 'styled-components';
import { useComponentTheme } from '../../../styling/settingsContext';
import { WithComponentTheme } from '../../../styling/helpers/WithComponentTheme';
import React, { Fragment, FunctionComponent, ReactElement } from 'react';

const componentThemeFactory =
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function ({ settings }: ComponentFactoryArgs<Settings>) {
    return {
      topBar: {
        height: settings.size(2),
        textColor: settings.textColor,
        textSize: settings.textSizes.title,
        backgroundColor: settings.brandColor,
        horizontalPadding: settings.size(0.5)
      },
      body: {
        marginTop: settings.size(3),
        horizontalMargin: settings.size(1)
      }
    };
  };

type ComponentTheme = InferComponentThemeOf<typeof componentThemeFactory>;

const TopBar = styled.nav<WithComponentTheme<ComponentTheme>>`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${({ componentTheme }): string => componentTheme.topBar.height};
  background-color: ${({ componentTheme }): string => componentTheme.topBar.backgroundColor};
  color: ${({ componentTheme }): string => componentTheme.topBar.textColor};
  font-size: ${({ componentTheme }): string => componentTheme.topBar.textSize};
  padding-left: ${({ componentTheme }): string => componentTheme.topBar.horizontalPadding};
  padding-right: ${({ componentTheme }): string => componentTheme.topBar.horizontalPadding};
`;

const Body = styled.div<WithComponentTheme<ComponentTheme>>`
  margin-top: ${({ componentTheme }): string => componentTheme.body.marginTop};
  margin-left: ${({ componentTheme }): string => componentTheme.body.horizontalMargin};
  margin-right: ${({ componentTheme }): string => componentTheme.body.horizontalMargin};
`;

interface BaseLayoutProps {
  topBar: ReactElement;
  body: ReactElement;
}

const BaseLayout: FunctionComponent<BaseLayoutProps> = function ({
  topBar,
  body
}): ReactElement {
  const { componentTheme } = useComponentTheme(componentThemeFactory);

  return (
    <Fragment>
      <TopBar componentTheme={ componentTheme }>
        { topBar }
      </TopBar>
      <Body componentTheme={ componentTheme}>
        { body }
      </Body>
    </Fragment>
  );
};

export {
  BaseLayout
};
