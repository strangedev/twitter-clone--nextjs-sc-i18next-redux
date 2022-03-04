import { createLocalTheme } from '../../../../styling/GlobalTheme';
import styled from 'styled-components';
import React, { FunctionComponent } from 'react';

interface FloatingComposeNewTweetButtonProps {
  onComposeNewTweet: () => void;
}

const { from } = createLocalTheme(({ globalTheme }) => ({
  backgroundColor: globalTheme.brandColor,
  iconColor: globalTheme.backgroundColor,
  size: globalTheme.size(20),
  fontSize: globalTheme.textSizes.title,
  position: {
    bottom: globalTheme.gap(1),
    right: globalTheme.gap(1)
  },
  hover: {
    yOffset: globalTheme.gap(1).neg()
  },
  transitionDelay: globalTheme.transition.delay
}));

const Bubble = styled.button`
  position: fixed;
  bottom: ${from(theme => theme.position.bottom)};
  right: ${from(theme => theme.position.right)};
  width: ${from(theme => theme.size)};
  shape-outside: circle();
  clip-path: circle();
  font-size: ${from(theme => theme.fontSize)};
  color: ${from(theme => theme.iconColor)};
  background-color: ${from(theme => theme.backgroundColor)};
  border: none;
  transition: all ${from(theme => theme.transitionDelay)};
  aspect-ratio: 1;
  
  &:hover {
    transform: translateY(${from(theme => theme.hover.yOffset)});
  }
`;

const FloatingComposeNewTweetButton: FunctionComponent<FloatingComposeNewTweetButtonProps> =
  ({ onComposeNewTweet }) => (
    <Bubble
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

export {
  FloatingComposeNewTweetButton
};
