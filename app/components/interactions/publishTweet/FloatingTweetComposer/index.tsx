import { Button } from '../../../inputs/buttons/Button';
import { ComponentFactoryArgs } from '../../../../styling/helpers/ComponentFactoryArgs';
import { getThemeLookupFunction } from '../../../../styling/helpers/lookup';
import { InferComponentThemeOf } from '../../../../styling/helpers/InferComponentThemeOf';
import { Settings } from '../../../../styling/Settings';
import styled from 'styled-components';
import { useComponentTheme } from '../../../../styling/settingsContext';
import { ThemedWith } from '../../../../styling/helpers/ThemedWith';
import React, { FunctionComponent, ReactElement } from 'react';
import { TextArea } from '../../../inputs/textareas/TextArea';

interface FloatingTweetComposerProps {
  onChange: (text: string) => void;
  onCancel: () => void;
  onPublish: () => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const componentThemeFactory = function ({ settings }: ComponentFactoryArgs<Settings, ThemeVariant>) {
  return {
    backgroundColor: settings.backgroundColor,
    border: {
      color: settings.brandColor,
      radius: settings.borderRadius,
      size: settings.borderSize
    },
    textColor: settings.textColor,
    position: {
      bottom: settings.gap(1),
      right: settings.gap(1)
    },
    size: {
      width: settings.size(96),
      height: settings.size(96)
    },
    headline: {
      size: {
        height: settings.size(10),
        font: settings.textSizes.content
      },
      color: {
        background: settings.brandColor,
        text: settings.backgroundColor
      }
    },
    row: {
      padding: {
        horizontal: settings.gap(1),
        vertical: settings.gap(1)
      }
    }
  };
};

type ComponentTheme = InferComponentThemeOf<typeof componentThemeFactory>;
const lookup = getThemeLookupFunction<ComponentTheme>();

const Container = styled.div<ThemedWith<ComponentTheme>>`
  position: fixed;
  bottom: ${lookup('position.bottom')};
  right: ${lookup('position.right')};
  background-color: ${lookup('backgroundColor')};
  border: ${lookup('border.size')} solid ${lookup('border.color')};
  border-radius: ${lookup('border.radius')};
  width: ${lookup('size.width')};
  height: ${lookup('size.height')};
  display: flex;
  flex-direction: column;
`;

const Headline = styled.div<ThemedWith<ComponentTheme>>`
  height: ${lookup('headline.size.height')};
  border-bottom: ${lookup('border.size')} solid ${lookup('border.color')};
  background-color: ${lookup('headline.color.background')};
  color: ${lookup('headline.color.text')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${lookup('headline.size.font')};
`;

const Row = styled.div<ThemedWith<ComponentTheme, { expand?: boolean }>>`
  padding: ${lookup('row.padding.vertical')} ${lookup('row.padding.horizontal')};
  ${({ expand }): string => expand ? 'flex-grow: 2' : ''}
`;

const Footer = styled.div<ThemedWith<ComponentTheme>>`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto;
  grid-template-areas: 'footer-left footer-center footer-right';
  padding-left: ${lookup('row.padding.vertical')};
  padding-right: ${lookup('row.padding.vertical')};
  padding-bottom: ${lookup('row.padding.horizontal')};;
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
  function ({ onCancel, onChange, onPublish }): ReactElement {
    const { componentTheme } = useComponentTheme(componentThemeFactory);

    return (
      <Container componentTheme={ componentTheme }>
        <Headline componentTheme={ componentTheme }>
          Compose a Twööt
        </Headline>

        <Row componentTheme={ componentTheme } expand={ true }>
          <TextArea
            placeholder='Write something fun...'
            onChange={ (text): void => onChange(text) }
          />
        </Row>
        <Footer componentTheme={ componentTheme }>
          <FooterLeft>
            <Button label='Cancel' onClick={ (): void => onCancel() } />
          </FooterLeft>
          <FooterRight>
            <Button label='Publish' onClick={ (): void => onPublish() } />
          </FooterRight>
        </Footer>
      </Container>
    );
  };

export {
  FloatingTweetComposer
};
