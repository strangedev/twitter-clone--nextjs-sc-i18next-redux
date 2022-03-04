import { Button } from '../../../inputs/buttons/Button';
import { createLocalTheme } from '../../../../styling/GlobalTheme';
import styled from 'styled-components';
import { TextArea } from '../../../inputs/textareas/TextArea';
import React, { FunctionComponent } from 'react';

interface FloatingTweetComposerProps {
  onChange: (text: string) => void;
  onCancel: () => void;
  onPublish: () => void;
}

const { from } = createLocalTheme(({ globalTheme }) => ({
  backgroundColor: globalTheme.backgroundColor,
  border: {
    color: globalTheme.brandColor,
    radius: globalTheme.borderRadius,
    size: globalTheme.borderSize
  },
  textColor: globalTheme.textColor,
  position: {
    bottom: globalTheme.gap(1),
    right: globalTheme.gap(1)
  },
  size: {
    width: globalTheme.size(96),
    height: globalTheme.size(96)
  },
  headline: {
    size: {
      height: globalTheme.size(10),
      font: globalTheme.textSizes.content
    },
    color: {
      background: globalTheme.brandColor,
      text: globalTheme.backgroundColor
    }
  },
  row: {
    padding: {
      horizontal: globalTheme.gap(1),
      vertical: globalTheme.gap(1)
    }
  }
}));

const Container = styled.div`
  position: fixed;
  bottom: ${from(theme => theme.position.bottom)};
  right: ${from(theme => theme.position.right)};
  background-color: ${from(theme => theme.backgroundColor)};
  border: ${from(theme => theme.border.size)} solid ${from(theme => theme.border.color)};
  border-radius: ${from(theme => theme.border.radius)};
  width: ${from(theme => theme.size.width)};
  height: ${from(theme => theme.size.height)};
  display: flex;
  flex-direction: column;
`;

const Headline = styled.div`
  height: ${from(theme => theme.headline.size.height)};
  border-bottom: ${from(theme => theme.border.size)} solid ${from(theme => theme.border.color)};
  background-color: ${from(theme => theme.headline.color.background)};
  color: ${from(theme => theme.headline.color.text)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${from(theme => theme.headline.size.font)};
`;

const Row = styled.div<{ expand?: boolean }>`
  padding: ${from(theme => theme.row.padding.vertical)} ${from(theme => theme.row.padding.horizontal)};
  ${({ expand }): string => expand ? 'flex-grow: 2' : ''}
`;

const Footer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto;
  grid-template-areas: 'footer-left footer-center footer-right';
  padding-left: ${from(theme => theme.row.padding.vertical)};
  padding-right: ${from(theme => theme.row.padding.vertical)};
  padding-bottom: ${from(theme => theme.row.padding.horizontal)};
`;

const FooterLeft = styled.div`
  grid-area: footer-left;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const FooterRight = styled.div`
  grid-area: footer-right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const FloatingTweetComposer: FunctionComponent<FloatingTweetComposerProps> =
  ({ onCancel, onChange, onPublish }) => (
    <Container>
      <Headline>
        Compose a Twööt
      </Headline>

      <Row expand={ true }>
        <TextArea
          placeholder='Write something fun...'
          onChange={ (text): void => onChange(text) }
        />
      </Row>
      <Footer>
        <FooterLeft>
          <Button label='Cancel' onClick={ (): void => onCancel() } />
        </FooterLeft>
        <FooterRight>
          <Button label='Publish' onClick={ (): void => onPublish() } />
        </FooterRight>
      </Footer>
    </Container>
  );

export {
  FloatingTweetComposer
};
