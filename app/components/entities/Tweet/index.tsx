import { ComponentFactoryArgs } from '../../../styling/helpers/ComponentFactoryArgs';
import { getThemeLookupFunction } from '../../../styling/helpers/lookup';
import { InferComponentThemeOf } from '../../../styling/helpers/InferComponentThemeOf';
import { Settings } from '../../../styling/Settings';
import styled from 'styled-components';
import { Tweet as TweetModel } from '../../../domainModel/Tweet';
import { useComponentTheme } from '../../../styling/settingsContext';
import { VerticalSpace } from '../../layout/VerticalSpace';
import { ThemedWith } from '../../../styling/helpers/ThemedWith';
import React, { FunctionComponent, ReactElement } from 'react';

const componentThemeFactory =
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function ({ settings }: ComponentFactoryArgs<Settings, ThemeVariant>) {
    return {
      container: {
        border: {
          radius: settings.borderRadius,
          color: settings.brandColor,
          width: settings.borderSize
        },
        padding: settings.gap(1)
      },
      handle: {
        textSize: settings.textSizes.content,
        textColor: settings.brandColor,
        marginRight: settings.gap(1)
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
const lookup = getThemeLookupFunction<ComponentTheme>();

const Container = styled.div<ThemedWith<ComponentTheme>>`
  padding: ${lookup('container.padding')};
  border-style: solid;
  border-color: ${lookup('container.border.color')};
  border-radius: ${lookup('container.border.radius')};
  border-width: ${lookup('container.border.width')};
`;

const Handle = styled.span<ThemedWith<ComponentTheme>>`
  color: ${lookup('handle.textColor')};
  font-size: ${lookup('handle.textSize')};
  margin-right: ${lookup('handle.marginRight')};
`;

const PublishingDate = styled.span<ThemedWith<ComponentTheme>>`
  color: ${lookup('publishingDate.textColor')};
  font-size: ${lookup('publishingDate.textSize')};
`;

const Text = styled.span<ThemedWith<ComponentTheme>>`
  font-size: ${lookup('text.textSize')};
  color: ${lookup('text.textColor')};
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
