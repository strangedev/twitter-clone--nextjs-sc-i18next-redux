import { ComponentFactoryArgs } from '../../../../styling/helpers/ComponentFactoryArgs';
import { getThemeLookupFunction } from '../../../../styling/helpers/lookup';
import { InferComponentThemeOf } from '../../../../styling/helpers/InferComponentThemeOf';
import { Settings } from '../../../../styling/Settings';
import styled from 'styled-components';
import { useComponentTheme } from '../../../../styling/settingsContext';
import { WithComponentTheme } from '../../../../styling/helpers/WithComponentTheme';
import React, { FunctionComponent, ReactElement } from 'react';

interface FloatingComposeNewTweetButtonProps {
  onComposeNewTweet: () => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const componentThemeFactory = function ({ settings }: ComponentFactoryArgs<Settings>) {
  return {
    backgroundColor: settings.brandColor,
    iconColor: settings.backgroundColor,
    size: settings.size(1),
    fontSize: settings.textSizes.headline,
    position: {
      bottom: settings.size(1),
      right: settings.size(1)
    },
    transitionDelay: settings.transition.delay
  };
};

type ComponentTheme = InferComponentThemeOf<typeof componentThemeFactory>;
const lookup = getThemeLookupFunction<ComponentTheme>();

const Bubble = styled.button<WithComponentTheme<ComponentTheme>>`
  position: absolute;
  bottom: ${lookup('position.bottom')};
  right: ${lookup('position.right')};
  padding: ${lookup('size')};
  shape-outside: circle();
  clip-path: circle();
  font-size: ${lookup('fontSize')};
  color: ${lookup('backgroundColor')};
  background-color: ${lookup('iconColor')};
  border: none;
  transition: all ${lookup('transitionDelay')};
  
  &:hover {
    color: ${lookup('iconColor')};
    background-color: ${lookup('backgroundColor')};
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
