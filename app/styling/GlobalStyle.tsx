import { ComponentFactoryArgs } from './helpers/ComponentFactoryArgs';
import { createGlobalStyle } from 'styled-components';
import { getThemeLookupFunction } from './helpers/lookup';
import { InferComponentThemeOf } from './helpers/InferComponentThemeOf';
import reset from 'styled-reset';
import { Settings } from './Settings';
import { ThemedWith } from './helpers/ThemedWith';
import { useComponentTheme } from './settingsContext';
import React, { FunctionComponent, ReactElement } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const componentThemeFactory = function ({ settings }: ComponentFactoryArgs<Settings>) {
  return {
    fontSize: settings.textSizes.content,
    backgroundColor: settings.backgroundColor,
    color: settings.textColor
  };
};

type ComponentTheme = InferComponentThemeOf<typeof componentThemeFactory>;
const lookup = getThemeLookupFunction<ComponentTheme>();

const GlobalStyleComponent = createGlobalStyle<ThemedWith<ComponentTheme>>`
  ${reset}
  
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Dosis', sans-serif;
    font-size: ${lookup('fontSize')};
    background-color: ${lookup('backgroundColor')};
    color: ${lookup('color')};
  }
`;

const GlobalStyle: FunctionComponent = function (): ReactElement {
  const { componentTheme } = useComponentTheme(componentThemeFactory);

  return (
    <GlobalStyleComponent componentTheme={ componentTheme } />
  );
};

export {
  GlobalStyle
};
