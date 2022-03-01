import { ComponentFactoryArgs } from '../../../../styling/helpers/ComponentFactoryArgs';
import { getThemeLookupFunction } from '../../../../styling/helpers/lookup';
import { InferComponentThemeOf } from '../../../../styling/helpers/InferComponentThemeOf';
import { Settings } from '../../../../styling/Settings';
import styled from 'styled-components';
import { ThemedWith } from '../../../../styling/helpers/ThemedWith';
import { useComponentTheme } from '../../../../styling/settingsContext';
import React, { FunctionComponent, ReactElement } from 'react';
import { ThemeVariant } from '../../../../styling/ThemeVariant';

interface FloatingComposeNewTweetButtonProps {
  onComposeNewTweet: () => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const componentThemeFactory = function ({ settings }: ComponentFactoryArgs<Settings, ThemeVariant>) {
  return {
    backgroundColor: settings.brandColor,
    iconColor: settings.backgroundColor,
    size: settings.size(20),
    fontSize: settings.textSizes.title,
    position: {
      bottom: settings.gap(1),
      right: settings.gap(1)
    },
    hover: {
      yOffset: settings.gap(1).negate()
    },
    transitionDelay: settings.transition.delay
  };
};

type ComponentTheme = InferComponentThemeOf<typeof componentThemeFactory>;
const lookup = getThemeLookupFunction<ComponentTheme>();

const Bubble = styled.button<ThemedWith<ComponentTheme>>`
  position: fixed;
  bottom: ${lookup('position.bottom')};
  right: ${lookup('position.right')};
  width: ${lookup('size')};
  shape-outside: circle();
  clip-path: circle();
  font-size: ${lookup('fontSize')};
  color: ${lookup('iconColor')};
  background-color: ${lookup('backgroundColor')};
  border: none;
  transition: all ${lookup('transitionDelay')};
  aspect-ratio: 1;
  
  &:hover {
    transform: translateY(${lookup('hover.yOffset')});
  }
`;

const FloatingComposeNewTweetButton: FunctionComponent<FloatingComposeNewTweetButtonProps> =
  function ({ onComposeNewTweet }): ReactElement {
    const { componentTheme } = useComponentTheme(componentThemeFactory);

    return (
      <Bubble
        componentTheme={ componentTheme }
        aria-label='Compose a new Twööt'
        onClick={
          (event): void => {
            event.preventDefault();
            onComposeNewTweet();
          }
        }
      >
        +
      </Bubble>
    );
  };

export {
  FloatingComposeNewTweetButton
};
