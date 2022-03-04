import styled from 'styled-components';
import { Tweet as TweetModel } from '../../../domainModel/Tweet';
import { createLocalTheme } from '../../../styling/GlobalTheme';
import { VerticalSpace } from '../../layout/VerticalSpace';
import React, { FunctionComponent, ReactElement } from 'react';

const { from } = createLocalTheme(({ globalTheme }) => ({
  container: {
    border: {
      radius: globalTheme.borderRadius,
      color: globalTheme.brandColor,
      width: globalTheme.borderSize
    },
    padding: globalTheme.gap(1)
  },
  handle: {
    textSize: globalTheme.textSizes.content,
    textColor: globalTheme.brandColor,
    marginRight: globalTheme.gap(1)
  },
  text: {
    textSize: globalTheme.textSizes.content,
    textColor: globalTheme.textColor
  },
  publishingDate: {
    textSize: globalTheme.textSizes.finePrint,
    textColor: globalTheme.textColor
  }
}));

const Container = styled.div`
  padding: ${from(theme => theme.container.padding)};
  border-style: solid;
  border-color: ${from(theme => theme.container.border.color)};
  border-radius: ${from(theme => theme.container.border.radius)};
  border-width: ${from(theme => theme.container.border.width)};
`;

const Handle = styled.span`
  color: ${from(theme => theme.handle.textColor)};
  font-size: ${from(theme => theme.handle.textSize)};
  margin-right: ${from(theme => theme.handle.marginRight)};
`;

const PublishingDate = styled.span`
  color: ${from(theme => theme.publishingDate.textColor)};
  font-size: ${from(theme => theme.publishingDate.textSize)};
`;

const Text = styled.span`
  font-size: ${from(theme => theme.text.textSize)};
  color: ${from(theme => theme.text.textColor)};
`;

interface TweetProps {
  tweet: TweetModel;
}

const Tweet: FunctionComponent<TweetProps> = function ({ tweet }): ReactElement {
  return (
    <Container>
      <Handle>
        { tweet.account.handle }
      </Handle>
      <PublishingDate>
        on { tweet.publishedAt }
      </PublishingDate>
      <VerticalSpace />
      <Text>
        { tweet.text }
      </Text>
    </Container>
  );
};

export {
  Tweet
};
