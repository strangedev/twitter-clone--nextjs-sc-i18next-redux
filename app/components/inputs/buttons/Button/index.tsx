import { ButtonContent } from '../ButtonContent/ButtonContent';
import { createLocalTheme } from '../../../../styling/GlobalTheme';
import styled from 'styled-components';
import React, { PropsWithChildren, ReactElement } from 'react';

interface ButtonProps<TAdditionalProps> {
  label: string;
  onClick: () => void;
  ContentComponent?: ButtonContent<TAdditionalProps>;
  contentProps?: TAdditionalProps;
}

const { from } = createLocalTheme(({ globalTheme }) => ({
  border: {
    color: globalTheme.brandColor,
    size: globalTheme.borderSize,
    radius: globalTheme.borderRadius
  },
  backgroundColor: {
    highlighted: globalTheme.brandColor,
    default: globalTheme.backgroundColor
  },
  text: {
    size: globalTheme.textSizes.content,
    color: {
      highlighted: globalTheme.backgroundColor,
      default: globalTheme.textColor
    }
  },
  padding: {
    horizontal: globalTheme.size(1),
    vertical: globalTheme.size(1)
  }
}));

const StyledButton = styled.button`
  padding: ${from(theme => theme.padding.vertical)} ${from(theme => theme.padding.horizontal)};
  border-style: solid;
  border-width: ${from(theme => theme.border.size)};
  border-color: ${from(theme => theme.border.color)};
  border-radius: ${from(theme => theme.border.radius)};
  font-size: ${from(theme => theme.text.size)};
  color: ${from(theme => theme.text.color.default)};
  background-color: ${from(theme => theme.backgroundColor.default)};
  
  &:hover {
    color: ${from(theme => theme.text.color.highlighted)};
    background-color: ${from(theme => theme.backgroundColor.highlighted)};
  }
`;

const Button = function <TAdditionalProps = undefined> ({
  label,
  onClick,
  ContentComponent,
  contentProps
}: PropsWithChildren<ButtonProps<TAdditionalProps>>): ReactElement {
  if (!ContentComponent) {
    return (
      <StyledButton
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
