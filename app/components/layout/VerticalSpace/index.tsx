import { createLocalTheme } from '../../../styling/GlobalTheme';
import styled from 'styled-components';
import React, { FunctionComponent } from 'react';

const { from } = createLocalTheme(({ globalTheme }) => ({
  verticalMargin: globalTheme.gap(1)
}));

const Spacer = styled.div`
  margin-top: ${from(theme => theme.verticalMargin)};
  margin-bottom: ${from(theme => theme.verticalMargin)};
`;

const VerticalSpace: FunctionComponent = ({ children }) => (
  <Spacer>
    { children }
  </Spacer>
);

export {
  VerticalSpace
};

