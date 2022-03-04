import { createLocalTheme } from '../../../../styling/GlobalTheme';
import styled from 'styled-components';
import React, { FunctionComponent, ReactElement } from 'react';

interface TextAreaProps {
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
  }
}));

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border-color: ${from(theme => theme.border.color)};
  border-width: ${from(theme => theme.border.size)};
  border-radius: ${from(theme => theme.border.radius)};
  background-color: ${from(theme => theme.backgroundColor)};
  color: ${from(theme => theme.text.color)};
  font-size: ${from(theme => theme.text.size)};
  font-family: inherit;
  outline: none;
`;

const TextArea: FunctionComponent<TextAreaProps> = function ({
  onChange,
  placeholder
}): ReactElement {
  return (
    <StyledTextArea
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
