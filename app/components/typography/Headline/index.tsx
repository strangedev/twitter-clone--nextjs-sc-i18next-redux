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
  function ({ settings }: ComponentFactoryArgs<Settings>) {
    return {
      textSize: settings.textSizes.headline,
      color: settings.textColor,
      verticalMargin: settings.size(0.5)
    };
  };

type ComponentTheme = InferComponentThemeOf<typeof componentThemeFactory>;
const lookup = getThemeLookupFunction<ComponentTheme>();

const Text = styled.div<ThemedWith<ComponentTheme>>`
  color: ${lookup('color')};
  font-size: ${lookup('textSize')};
  margin-top: ${lookup('verticalMargin')};
  margin-bottom: ${lookup('verticalMargin')};
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
