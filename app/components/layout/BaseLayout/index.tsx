import { createLocalTheme } from '../../../styling/GlobalTheme';
import styled from 'styled-components';
import { ThemeSwitcher } from '../../interactions/switchTheme/smartComponent/ThemeSwitcher';
import React, { Fragment, FunctionComponent, ReactElement } from 'react';

const { from } = createLocalTheme(({ globalTheme }) => ({
  topBar: {
    height: globalTheme.size(14),
    textColor: globalTheme.backgroundColor,
    textSize: globalTheme.textSizes.title,
    backgroundColor: globalTheme.brandColor,
    horizontalPadding: globalTheme.gap(1)
  },
  body: {
    marginTop: globalTheme.size(14).add(globalTheme.gap(1)),
    horizontalMargin: globalTheme.gap(1)
  }
}));

const TopBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${from(theme => theme.topBar.height)};
  background-color: ${from(theme => theme.topBar.backgroundColor)};
  color: ${from(theme => theme.topBar.textColor)};
  padding-left: ${from(theme => theme.topBar.horizontalPadding)};
  padding-right: ${from(theme => theme.topBar.horizontalPadding)};
  padding-right: ${from(theme => theme.topBar.height)};
  display: flex;
  align-items: baseline;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const Body = styled.div`
  margin-top: ${from(theme => theme.body.marginTop)};
  margin-left: ${from(theme => theme.body.horizontalMargin)};
  margin-right: ${from(theme => theme.body.horizontalMargin)};
`;

interface BaseLayoutProps {
  topBar: ReactElement;
  body: ReactElement;
}

const BaseLayout: FunctionComponent<BaseLayoutProps> = function ({
  topBar,
  body
}): ReactElement {
  return (
    <Fragment>
      <TopBar>
        { topBar }
        <ThemeSwitcher />
      </TopBar>
      <Body>
        { body }
      </Body>
    </Fragment>
  );
};

export {
  BaseLayout
};
