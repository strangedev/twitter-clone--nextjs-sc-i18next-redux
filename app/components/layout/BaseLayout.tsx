import { ComponentThemeFactory } from 'react-component-theming';
import { Settings } from '../../styling/Settings';
import styled from 'styled-components';
import { ThemeVariant } from '../../styling/ThemeVariant';
import { useComponentTheme } from '../../styling/settingsContext';
import { WithComponentTheme } from '../../styling/helpers/WithComponentTheme';
import React, { Fragment, FunctionComponent, ReactElement } from 'react';

interface ComponentTheme {
  topBar: {
    height: string;
    textColor: string;
    textSize: string;
    backgroundColor: string;
    horizontalPadding: string;
  };
  body: {
    marginTop: string;
    horizontalMargin: string;
  };
}

const componentThemeFactory: ComponentThemeFactory<Settings, ThemeVariant, ComponentTheme> =
  function ({ settings }): ComponentTheme {
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

const TopBar = styled.nav<WithComponentTheme<ComponentTheme, unknown>>`
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

const Body = styled.div<WithComponentTheme<ComponentTheme, unknown>>`
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
