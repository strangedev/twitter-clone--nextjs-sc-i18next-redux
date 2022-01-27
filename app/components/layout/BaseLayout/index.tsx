import { ComponentFactoryArgs } from '../../../styling/helpers/ComponentFactoryArgs';
import { getThemeLookupFunction } from '../../../styling/helpers/lookup';
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
const lookup = getThemeLookupFunction<ComponentTheme>();

const TopBar = styled.nav<WithComponentTheme<ComponentTheme>>`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${lookup('topBar.height')};
  background-color: ${lookup('topBar.backgroundColor')};
  color: ${lookup('topBar.textColor')};
  font-size: ${lookup('topBar.textSize')};
  padding-left: ${lookup('topBar.horizontalPadding')};
  padding-right: ${lookup('topBar.horizontalPadding')};
  padding-right: ${lookup('topBar.height')};
`;

const Body = styled.div<WithComponentTheme<ComponentTheme>>`
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
