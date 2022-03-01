import { ComponentFactoryArgs } from '../../../styling/helpers/ComponentFactoryArgs';
import { getThemeLookupFunction } from '../../../styling/helpers/lookup';
import { InferComponentThemeOf } from '../../../styling/helpers/InferComponentThemeOf';
import { Settings } from '../../../styling/Settings';
import styled from 'styled-components';
import { ThemedWith } from '../../../styling/helpers/ThemedWith';
import { useComponentTheme } from '../../../styling/settingsContext';
import React, { FunctionComponent, ReactElement } from 'react';

const componentThemeFactory =
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function ({ settings }: ComponentFactoryArgs<Settings, ThemeVariant>) {
    return {
      textSize: settings.textSizes.headline,
      color: settings.textColor,
      topMargin: settings.gap(2),
      bottomMargin: settings.gap(1)
    };
  };

type ComponentTheme = InferComponentThemeOf<typeof componentThemeFactory>;
const lookup = getThemeLookupFunction<ComponentTheme>();

const Text = styled.div<ThemedWith<ComponentTheme>>`
  color: ${lookup('color')};
  font-size: ${lookup('textSize')};
  margin-top: ${lookup('topMargin')};
  margin-bottom: ${lookup('bottomMargin')};
`;

const Headline: FunctionComponent = function ({ children }): ReactElement {
  const { componentTheme } = useComponentTheme(componentThemeFactory);

  return (
    <Text componentTheme={ componentTheme }>
      { children }
    </Text>
  );
};

export {
  Headline
};
