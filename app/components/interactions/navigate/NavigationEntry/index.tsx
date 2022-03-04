import { createLocalTheme } from '../../../../styling/GlobalTheme';
import styled from 'styled-components';
import React, { FunctionComponent, ReactElement } from 'react';

interface LinkProps {
  text: string;
  onClick: () => void;
}

const { from } = createLocalTheme(({ globalTheme }) => ({
  text: {
    size: globalTheme.textSizes.headline,
    color: globalTheme.backgroundColor
  },
  padding: {
    horizontal: globalTheme.gap(1)
  }
}));

const StyledLink = styled.span`
  font-size: ${from(theme => theme.text.size)};
  color: ${from(theme => theme.text.color)};
  padding: 0 ${from(theme => theme.padding.horizontal)};
  text-decoration: none;
  cursor: pointer;
`;

const NavigationEntry: FunctionComponent<LinkProps> = function ({
  text,
  onClick
}): ReactElement {
  return (
    <StyledLink
      role='link'
      onClick={ (): void => onClick() }
    >
      { text }
    </StyledLink>
  );
};

export {
  NavigationEntry
};
