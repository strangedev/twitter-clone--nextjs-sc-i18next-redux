import { ComponentFactoryArgs } from '../../../styling/helpers/ComponentFactoryArgs';
import { getThemeLookupFunction } from '../../../styling/helpers/lookup';
import { InferComponentThemeOf } from '../../../styling/helpers/InferComponentThemeOf';
import { Settings } from '../../../styling/Settings';
import styled from 'styled-components';
import { ThemedWith } from '../../../styling/helpers/ThemedWith';
import { useComponentTheme } from '../../../styling/settingsContext';
import React, { FunctionComponent, ReactElement } from 'react';
import { ThemeVariant } from '../../../styling/ThemeVariant';

const componentThemeFactory =
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function ({ settings }: ComponentFactoryArgs<Settings, ThemeVariant>) {
    return {
      verticalMargin: settings.gap(1)
    };
  };

type ComponentTheme = InferComponentThemeOf<typeof componentThemeFactory>;
const lookup = getThemeLookupFunction<ComponentTheme>();

const Spacer = styled.div<ThemedWith<ComponentTheme>>`
  margin-top: ${lookup('verticalMargin')};
  margin-bottom: ${lookup('verticalMargin')};
`;

const VerticalSpace: FunctionComponent = function ({ children }): ReactElement {
  const { componentTheme } = useComponentTheme(componentThemeFactory);

  return (
    <Spacer componentTheme={ componentTheme }>
      { children }
    </Spacer>
  );
};

export {
  VerticalSpace
};

