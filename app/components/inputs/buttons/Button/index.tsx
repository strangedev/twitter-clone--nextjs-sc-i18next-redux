import { ButtonContent } from '../ButtonContent/ButtonContent';
import { ComponentFactoryArgs } from '../../../../styling/helpers/ComponentFactoryArgs';
import { getThemeLookupFunction } from '../../../../styling/helpers/lookup';
import { InferComponentThemeOf } from '../../../../styling/helpers/InferComponentThemeOf';
import { Settings } from '../../../../styling/Settings';
import styled from 'styled-components';
import { useComponentTheme } from '../../../../styling/settingsContext';
import { WithComponentTheme } from '../../../../styling/helpers/WithComponentTheme';
import React, { PropsWithChildren, ReactElement } from 'react';

interface ButtonProps<TAdditionalProps> {
  label: string;
  onClick: () => void;
  ContentComponent?: ButtonContent<TAdditionalProps>;
  contentProps?: TAdditionalProps;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const componentThemeFactory = function ({ settings }: ComponentFactoryArgs<Settings>) {
  return {
    border: {
      color: settings.brandColor,
      size: settings.borderSize,
      radius: settings.borderRadius
    },
    backgroundColor: {
      highlighted: settings.brandColor,
      default: settings.backgroundColor
    },
    text: {
      size: settings.textSizes.content,
      color: {
        highlighted: settings.backgroundColor,
        default: settings.textColor
      }
    },
    padding: {
      horizontal: settings.size(0.66),
      vertical: settings.size(0.33)
    }
  };
};

type ComponentTheme = InferComponentThemeOf<typeof componentThemeFactory>;
const lookup = getThemeLookupFunction<ComponentTheme>();

const StyledButton = styled.button<WithComponentTheme<ComponentTheme>>`
  padding: ${lookup('padding.vertical')} ${lookup('padding.horizontal')};
  border-style: solid;
  border-width: ${lookup('border.size')};
  border-color: ${lookup('border.color')};
  border-radius: ${lookup('border.radius')};
  font-size: ${lookup('text.size')};
  color: ${lookup('text.color.default')};
  background-color: ${lookup('backgroundColor.default')};
  
  &:hover {
    color: ${lookup('text.color.highlighted')};
    background-color: ${lookup('backgroundColor.highlighted')};
  }
`;

const Button = function <TAdditionalProps = undefined> ({
  label,
  onClick,
  ContentComponent,
  contentProps
}: PropsWithChildren<ButtonProps<TAdditionalProps>>): ReactElement {
  const { componentTheme } = useComponentTheme(componentThemeFactory);

  if (!ContentComponent) {
    return (
      <StyledButton
        componentTheme={ componentTheme }
        aria-label={ label }
        onClick={
          (event): void => {
            event.preventDefault();
            onClick();
          }
        }
      >
        { label }
      </StyledButton>
    );
  }

  return (
    <StyledButton
      componentTheme={ componentTheme }
      aria-label={ label }
      onClick={
        (event): void => {
          event.preventDefault();
          onClick();
        }
      }
    >
      <ContentComponent label={ label } { ...contentProps! } />
    </StyledButton>
  );
};

export {
  Button
};
