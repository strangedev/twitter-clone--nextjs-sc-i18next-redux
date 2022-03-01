import { ComponentFactoryArgs } from '../../../styling/helpers/ComponentFactoryArgs';
import { getThemeLookupFunction } from '../../../styling/helpers/lookup';
import { InferComponentThemeOf } from '../../../styling/helpers/InferComponentThemeOf';
import { Settings } from '../../../styling/Settings';
import styled from 'styled-components';
import { ThemedWith } from '../../../styling/helpers/ThemedWith';
import { useComponentTheme } from '../../../styling/settingsContext';
import React, { Fragment, FunctionComponent, ReactElement } from 'react';
import { ThemeVariant } from '../../../styling/ThemeVariant';
import { ThemeSwitcher } from '../../interactions/switchTheme/smartComponent/ThemeSwitcher';

const componentThemeFactory =
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function ({ settings }: ComponentFactoryArgs<Settings, ThemeVariant>) {
    return {
      topBar: {
        height: settings.size(14),
        textColor: settings.backgroundColor,
        textSize: settings.textSizes.title,
        backgroundColor: settings.brandColor,
        horizontalPadding: settings.gap(1)
      },
      body: {
        marginTop: settings.size(14).add(settings.gap(1)),
        horizontalMargin: settings.gap(1)
      }
    };
  };

type ComponentTheme = InferComponentThemeOf<typeof componentThemeFactory>;
const lookup = getThemeLookupFunction<ComponentTheme>();

const TopBar = styled.nav<ThemedWith<ComponentTheme>>`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${lookup('topBar.height')};
  background-color: ${lookup('topBar.backgroundColor')};
  color: ${lookup('topBar.textColor')};
  padding-left: ${lookup('topBar.horizontalPadding')};
  padding-right: ${lookup('topBar.horizontalPadding')};
  padding-right: ${lookup('topBar.height')};
  display: flex;
  align-items: baseline;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const Body = styled.div<ThemedWith<ComponentTheme>>`
  margin-top: ${lookup('body.marginTop')};
  margin-left: ${lookup('body.horizontalMargin')};
  margin-right: ${lookup('body.horizontalMargin')};
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
        <ThemeSwitcher />
      </TopBar>
      <Body componentTheme={ componentTheme }>
        { body }
      </Body>
    </Fragment>
  );
};

export {
  BaseLayout
};
