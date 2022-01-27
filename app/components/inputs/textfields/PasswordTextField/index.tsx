import { ComponentFactoryArgs } from '../../../../styling/helpers/ComponentFactoryArgs';
import { getThemeLookupFunction } from '../../../../styling/helpers/lookup';
import { InferComponentThemeOf } from '../../../../styling/helpers/InferComponentThemeOf';
import { Settings } from '../../../../styling/Settings';
import styled from 'styled-components';
import { useComponentTheme } from '../../../../styling/settingsContext';
import { WithComponentTheme } from '../../../../styling/helpers/WithComponentTheme';
import React, { FunctionComponent, ReactElement } from 'react';

interface TextFieldProps {
  placeholder: string;
  onChange: (text: string) => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const componentThemeFactory = function ({ settings }: ComponentFactoryArgs<Settings>) {
  return {
    border: {
      color: settings.brandColor,
      size: settings.borderSize,
      radius: settings.borderRadius
    },
    backgroundColor: settings.backgroundColor,
    text: {
      size: settings.textSizes.content,
      color: settings.textColor
    },
    padding: {
      horizontal: settings.size(0.33),
      vertical: settings.size(0.33)
    }
  };
};

type ComponentTheme = InferComponentThemeOf<typeof componentThemeFactory>;
const lookup = getThemeLookupFunction<ComponentTheme>();

const StyledTextField = styled.input<WithComponentTheme<ComponentTheme>>`
  width: 100%;
  resize: none;
  padding: ${lookup('padding.vertical')} ${lookup('padding.horizontal')};
  border-color: ${lookup('border.color')};
  border-width: ${lookup('border.size')};
  border-radius: ${lookup('border.radius')};
  border-style: solid;
  background-color: ${lookup('backgroundColor')};
  color: ${lookup('text.color')};
  font-size: ${lookup('text.size')};
  font-family: inherit;
  outline: none;
`;

const PasswordTextField: FunctionComponent<TextFieldProps> = function ({
  onChange,
  placeholder
}): ReactElement {
  const { componentTheme } = useComponentTheme(componentThemeFactory);

  return (
    <StyledTextField
      type='password'
      componentTheme={ componentTheme }
      onChange={
        (event): void => {
          event.preventDefault();
          onChange(event.target.value);
        }
      }
      placeholder={ placeholder }
    />
  );
};

export {
  PasswordTextField
};
