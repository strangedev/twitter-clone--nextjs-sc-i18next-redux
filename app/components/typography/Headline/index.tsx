import { createLocalTheme } from '../../../styling/GlobalTheme';
import styled from 'styled-components';
import React, { FunctionComponent } from 'react';

const { from } = createLocalTheme(({ globalTheme }) => ({
  textSize: globalTheme.textSizes.headline,
  color: globalTheme.textColor,
  topMargin: globalTheme.gap(2),
  bottomMargin: globalTheme.gap(1)
}));

const Text = styled.div`
  color: ${from(theme => theme.color)};
  font-size: ${from(theme => theme.textSize)};
  margin-top: ${from(theme => theme.topMargin)};
  margin-bottom: ${from(theme => theme.bottomMargin)};
`;

const Headline: FunctionComponent = ({ children }) => (
  <Text>
    { children }
  </Text>
);

export {
  Headline
};
