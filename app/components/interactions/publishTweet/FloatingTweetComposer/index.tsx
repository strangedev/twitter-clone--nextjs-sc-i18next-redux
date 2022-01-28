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
const componentThemeFactory = function ({ settings }: ComponentFactoryArgs<Settings>) {
  return {
    backgroundColor: settings.backgroundColor,
    border: {
      color: settings.brandColor,
      radius: settings.borderRadius,
      size: settings.borderSize
    },
    textColor: settings.textColor,
    position: {
      bottom: settings.size(1),
      right: settings.size(5)
    },
    size: {
      width: settings.size(20),
      height: settings.size(20)
    },
    headline: {
      size: {
        height: settings.size(1),
        font: settings.textSizes.content
      },
      color: {
        background: settings.brandColor,
        text: settings.backgroundColor
      }
    },
    footer: {
      size: {
        height: settings.size(2)
      },
      padding: {
        horizontal: settings.size(0.33)
      }
    },
    body: {
      padding: {
        horizontal: settings.size(0.33),
        vertical: settings.size(0.33)
      }
    }
  };
};

type ComponentTheme = InferComponentThemeOf<typeof componentThemeFactory>;
const lookup = getThemeLookupFunction<ComponentTheme>();

const Container = styled.div<ThemedWith<ComponentTheme>>`
  position: absolute;
  bottom: ${lookup('position.bottom')};
  right: ${lookup('position.right')};
  background-color: ${lookup('backgroundColor')};
  border: ${lookup('border.size')} solid ${lookup('border.color')};
  border-radius: ${lookup('border.radius')};
  width: ${lookup('size.width')};
  height: ${lookup('size.height')};
  display: grid;
  grid-template-rows: ${lookup('headline.size.height')} auto ${lookup('footer.size.height')};
  grid-template-columns: auto auto auto;
  grid-template-areas:
    "headline headline headline"
    "body body body"
    "footer-left footer-center footer-right";
`;

const Headline = styled.div<ThemedWith<ComponentTheme>>`
  grid-area: headline;
  border-bottom: ${lookup('border.size')} solid ${lookup('border.color')};
  background-color: ${lookup('headline.color.background')};
  color: ${lookup('headline.color.text')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${lookup('headline.size.font')};
`;

const Body = styled.div<ThemedWith<ComponentTheme>>`
  grid-area: body;
  padding: ${lookup('body.padding.vertical')} ${lookup('body.padding.horizontal')};
`;

const FooterLeft = styled.div<ThemedWith<ComponentTheme>>`
  grid-area: footer-left;
  padding-left: ${lookup('footer.padding.horizontal')};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const FooterCenter = styled.div<ThemedWith<ComponentTheme>>`
  grid-area: footer-center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterRight = styled.div<ThemedWith<ComponentTheme>>`
  padding-right: ${lookup('footer.padding.horizontal')};
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

        <Body componentTheme={ componentTheme }>
          <TextArea
            placeholder='Write something fun...'
            onChange={ (text): void => onChange(text) }
          />
        </Body>

        <FooterLeft componentTheme={ componentTheme }>
          <Button label='Cancel' onClick={ (): void => onCancel() } />
        </FooterLeft>
        <FooterRight componentTheme={ componentTheme }>
          <Button label='Publish' onClick={ (): void => onPublish() } />
        </FooterRight>
      </Container>
    );
  };

export {
  FloatingTweetComposer
};
