import { createLocalTheme } from '../../../../styling/GlobalTheme';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import React, { FunctionComponent, ReactElement } from 'react';

interface LinkProps {
  text: string;
  href: string;
}

const { from } = createLocalTheme(({ globalTheme }) => ({
  text: {
    size: globalTheme.textSizes.title,
    color: globalTheme.backgroundColor
  },
  rightMargin: globalTheme.gap(1)
}));

const StyledLink = styled.span`
  font-size: ${from(theme => theme.text.size)};
  color: ${from(theme => theme.text.color)};
  margin-right: ${from(theme => theme.rightMargin)};
  text-decoration: none;
  cursor: pointer;
`;

const Brand: FunctionComponent<LinkProps> = function ({
  text,
  href
}): ReactElement {
  const router = useRouter();

  return (
    <StyledLink
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
