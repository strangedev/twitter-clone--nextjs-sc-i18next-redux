import { ComponentFactoryArgs } from '../../styling/helpers/ComponentFactoryArgs';
import { InferComponentThemeOf } from '../../styling/helpers/InferComponentThemeOf';
import { Settings } from '../../styling/Settings';
import styled from 'styled-components';
import { Tweet as TweetModel } from '../../domainModel/Tweet';
import { useComponentTheme } from '../../styling/settingsContext';
import { VerticalSpace } from '../layout/VerticalSpace';
import { WithComponentTheme } from '../../styling/helpers/WithComponentTheme';
import React, { FunctionComponent, ReactElement } from 'react';

const componentThemeFactory =
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function ({ settings }: ComponentFactoryArgs<Settings>) {
    return {
      container: {
        border: {
          radius: settings.borderRadius,
          color: settings.brandColor,
          width: '1px'
        },
        padding: settings.size(0.4)
      },
      handle: {
        textSize: settings.textSizes.content,
        textColor: settings.brandColor,
        marginRight: settings.size(0.2)
      },
      text: {
        textSize: settings.textSizes.content,
        textColor: settings.textColor
      },
      publishingDate: {
        textSize: settings.textSizes.finePrint,
        textColor: settings.textColor
      }
    };
  };

type ComponentTheme = InferComponentThemeOf<typeof componentThemeFactory>;

const Container = styled.div<WithComponentTheme<ComponentTheme>>`
  padding: ${({ componentTheme }): string => componentTheme.container.padding};
  border-style: solid;
  border-color: ${({ componentTheme }): string => componentTheme.container.border.color};
  border-radius: ${({ componentTheme }): string => componentTheme.container.border.radius};
  border-width: ${({ componentTheme }): string => componentTheme.container.border.width};
`;

const Handle = styled.span<WithComponentTheme<ComponentTheme>>`
  color: ${({ componentTheme }): string => componentTheme.handle.textColor};
  font-size: ${({ componentTheme }): string => componentTheme.handle.textSize};
  margin-right: ${({ componentTheme }): string => componentTheme.handle.marginRight};
`;

const PublishingDate = styled.span<WithComponentTheme<ComponentTheme>>`
  color: ${({ componentTheme }): string => componentTheme.publishingDate.textColor};
  font-size: ${({ componentTheme }): string => componentTheme.publishingDate.textSize};
`;

const Text = styled.span<WithComponentTheme<ComponentTheme>>`
  font-size: ${({ componentTheme }): string => componentTheme.text.textSize};
  color: ${({ componentTheme }): string => componentTheme.text.textColor};
`;

interface TweetProps {
  tweet: TweetModel;
}

const Tweet: FunctionComponent<TweetProps> = function ({ tweet }): ReactElement {
  const { componentTheme } = useComponentTheme(componentThemeFactory);

  return (
    <Container componentTheme={ componentTheme }>
      <Handle componentTheme={ componentTheme }>
        { tweet.account.handle }
      </Handle>
      <PublishingDate componentTheme={ componentTheme }>
        on { tweet.publishedAt }
      </PublishingDate>
      <VerticalSpace />
      <Text componentTheme={ componentTheme }>
        { tweet.text }
      </Text>
    </Container>
  );
};

export {
  Tweet
};
