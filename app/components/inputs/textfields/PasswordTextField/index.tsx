import { createLocalTheme } from '../../../../styling/GlobalTheme';
import styled from 'styled-components';
import React, { FunctionComponent, ReactElement } from 'react';

interface TextFieldProps {
  placeholder: string;
  onChange: (text: string) => void;
}

const { from } = createLocalTheme(({ globalTheme }) => ({
  border: {
    color: globalTheme.brandColor,
    size: globalTheme.borderSize,
    radius: globalTheme.borderRadius
  },
  backgroundColor: globalTheme.backgroundColor,
  text: {
    size: globalTheme.textSizes.content,
    color: globalTheme.textColor
  },
  padding: {
    horizontal: globalTheme.size(0.5),
    vertical: globalTheme.size(0.5)
  }
}));

const StyledTextField = styled.input`
  width: 100%;
  resize: none;
  padding: ${from(theme => theme.padding.vertical)} ${from(theme => theme.padding.horizontal)};
  border-color: ${from(theme => theme.border.color)};
  border-width: ${from(theme => theme.border.size)};
  border-radius: ${from(theme => theme.border.radius)};
  border-style: solid;
  background-color: ${from(theme => theme.backgroundColor)};
  color: ${from(theme => theme.text.color)};
  font-size: ${from(theme => theme.text.size)};
  font-family: inherit;
  outline: none;
`;

const PasswordTextField: FunctionComponent<TextFieldProps> = function ({
  onChange,
  placeholder
}): ReactElement {
  return (
    <StyledTextField
      type='password'
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
