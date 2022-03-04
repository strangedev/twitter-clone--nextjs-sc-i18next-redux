import { createLocalTheme } from '../../../styling/GlobalTheme';
import styled from 'styled-components';
import React, { FunctionComponent } from 'react';

interface LinkProps {
  text: string;
  variant: 'title' | 'headline' | 'content' | 'finePrint';
  inverted?: boolean;
  href: string;
}

const { get } = createLocalTheme(({ globalTheme }) => ({
  text: {
    sizes: globalTheme.textSizes,
    colors: {
      default: globalTheme.brandColor,
      inverted: globalTheme.backgroundColor
    }
  }
}));

const StyledLink = styled.a<Pick<LinkProps, 'variant' | 'inverted'>>`
  font-size: ${({ variant }): string => get(theme => theme.text.sizes[variant])};
  color: ${({ inverted }): string => inverted ? get(theme => theme.text.colors.inverted) : get(theme => theme.text.colors.default)};
`;

const Link: FunctionComponent<LinkProps> = ({
  text,
  variant,
  href,
  inverted
}) => (
  <StyledLink
    variant={ variant }
    href={ href }
    inverted={ inverted }
  >
    { text }
  </StyledLink>
);

export {
  Link
};
