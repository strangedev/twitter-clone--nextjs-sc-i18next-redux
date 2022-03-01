import { ComponentFactoryArgs } from '../../../../styling/helpers/ComponentFactoryArgs';
import { getThemeLookupFunction } from '../../../../styling/helpers/lookup';
import { InferComponentThemeOf } from '../../../../styling/helpers/InferComponentThemeOf';
import { Settings } from '../../../../styling/Settings';
import styled from 'styled-components';
import { ThemedWith } from '../../../../styling/helpers/ThemedWith';
import { ThemeVariant } from '../../../../styling/ThemeVariant';
import { useComponentTheme } from '../../../../styling/settingsContext';
import React, { FunctionComponent, ReactElement } from 'react';

interface TextAreaProps {
  placeholder: string;
  onChange: (text: string) => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const componentThemeFactory = function ({ settings }: ComponentFactoryArgs<Settings, ThemeVariant>) {
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
    }
  };
};

type ComponentTheme = InferComponentThemeOf<typeof componentThemeFactory>;
const lookup = getThemeLookupFunction<ComponentTheme>();

const StyledTextArea = styled.textarea<ThemedWith<ComponentTheme>>`
  width: 100%;
  height: 100%;
  resize: none;
  border-color: ${lookup('border.color')};
  border-width: ${lookup('border.size')};
  border-radius: ${lookup('border.radius')};
  background-color: ${lookup('backgroundColor')};
  color: ${lookup('text.color')};
  font-size: ${lookup('text.size')};
  font-family: inherit;
  outline: none;
`;

const TextArea: FunctionComponent<TextAreaProps> = function ({
  onChange,
  placeholder
}): ReactElement {
  const { componentTheme } = useComponentTheme(componentThemeFactory);

  return (
    <StyledTextArea
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
  TextArea
};
