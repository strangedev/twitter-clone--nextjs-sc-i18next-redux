import { Color } from '../../../styling/css-in-js/quantities/Color';
import { ComponentFactoryArgs } from '../../../styling/helpers/ComponentFactoryArgs';
import { InferComponentThemeOf } from '../../../styling/helpers/InferComponentThemeOf';
import { Length } from '../../../styling/css-in-js/quantities/Length';
import { Settings } from '../../../styling/Settings';
import styled from 'styled-components';
import { ThemedWith } from '../../../styling/helpers/ThemedWith';
import { ThemeVariant } from '../../../styling/ThemeVariant';
import { useComponentTheme } from '../../../styling/settingsContext';
import React, { FunctionComponent, ReactElement } from 'react';

interface LinkProps {
  text: string;
  variant: keyof Settings['textSizes'];
  inverted?: boolean;
  href: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const componentThemeFactory = function ({ settings }: ComponentFactoryArgs<Settings, ThemeVariant>) {
  return {
    text: {
      sizes: settings.textSizes,
      colors: {
        default: settings.brandColor,
        inverted: settings.backgroundColor
      }
    }
  };
};

type ComponentTheme = InferComponentThemeOf<typeof componentThemeFactory>;

const StyledLink = styled.a<ThemedWith<ComponentTheme, Pick<LinkProps, 'variant' | 'inverted'>>>`
  font-size: ${({ componentTheme, variant }): Length => componentTheme.text.sizes[variant]};
  color: ${({ componentTheme, inverted }): Color => inverted ? componentTheme.text.colors.inverted : componentTheme.text.colors.default};
`;

const Link: FunctionComponent<LinkProps> = function ({
  text,
  variant,
  href,
  inverted
}): ReactElement {
  const { componentTheme } = useComponentTheme(componentThemeFactory);

  return (
    <StyledLink
      componentTheme={ componentTheme }
      variant={ variant }
      href={ href }
      inverted={ inverted }
    >
      { text }
    </StyledLink>
  );
};

export {
  Link,
};