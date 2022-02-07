import { useRouter } from 'next/router';
import { ComponentFactoryArgs } from '../../../../styling/helpers/ComponentFactoryArgs';
import { getThemeLookupFunction } from '../../../../styling/helpers/lookup';
import { InferComponentThemeOf } from '../../../../styling/helpers/InferComponentThemeOf';
import { Settings } from '../../../../styling/Settings';
import styled from 'styled-components';
import { ThemedWith } from '../../../../styling/helpers/ThemedWith';
import { useComponentTheme } from '../../../../styling/settingsContext';
import React, { FunctionComponent, ReactElement } from 'react';

interface LinkProps {
  text: string;
  href: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const componentThemeFactory = function ({ settings }: ComponentFactoryArgs<Settings>) {
  return {
    text: {
      size: settings.textSizes.title,
      color: settings.backgroundColor
    }
  };
};

type ComponentTheme = InferComponentThemeOf<typeof componentThemeFactory>;
const lookup = getThemeLookupFunction<ComponentTheme>();

const StyledLink = styled.span<ThemedWith<ComponentTheme>>`
  font-size: ${lookup('text.size')};
  color: ${lookup('text.color')};
  text-decoration: none;
  cursor: pointer;
`;

const Brand: FunctionComponent<LinkProps> = function ({
  text,
  href
}): ReactElement {
  const { componentTheme } = useComponentTheme(componentThemeFactory);
  const router = useRouter();

  return (
    <StyledLink
      componentTheme={ componentTheme }
      role='link'
      onClick={
        (): void => {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          router.push(href);
        }
      }
    >
      { text }
    </StyledLink>
  );
};

export {
  Brand
};
