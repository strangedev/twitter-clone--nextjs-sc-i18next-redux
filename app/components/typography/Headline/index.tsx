import { ComponentFactoryArgs } from '../../../styling/helpers/ComponentFactoryArgs';
import { InferComponentThemeOf } from '../../../styling/helpers/InferComponentThemeOf';
import { Settings } from '../../../styling/Settings';
import styled from 'styled-components';
import { useComponentTheme } from '../../../styling/settingsContext';
import { WithComponentTheme } from '../../../styling/helpers/WithComponentTheme';
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

const Text = styled.div<WithComponentTheme<ComponentTheme>>`
  color: ${({ componentTheme }): string => componentTheme.color};
  font-size: ${({ componentTheme }): string => componentTheme.textSize};
  margin-top: ${({ componentTheme }): string => componentTheme.verticalMargin};
  margin-bottom: ${({ componentTheme }): string => componentTheme.verticalMargin};
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
