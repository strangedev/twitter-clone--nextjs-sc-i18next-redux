import { Button } from '../../../inputs/buttons/Button';
import { ComponentFactoryArgs } from '../../../../styling/helpers/ComponentFactoryArgs';
import { CssBuilder } from '../../../../styling/css-in-js/CssBuilder';
import { getApplyMixin } from '../../../../styling/helpers/mixins/applyMixin';
import { getThemeLookupFunction } from '../../../../styling/helpers/lookup';
import { InferComponentThemeOf } from '../../../../styling/helpers/InferComponentThemeOf';
import { MixinArgs } from '../../../../styling/helpers/mixins/MixinArgs';
import { PasswordTextField } from '../../../inputs/textfields/PasswordTextField';
import { Settings } from '../../../../styling/Settings';
import styled from 'styled-components';
import { TextField } from '../../../inputs/textfields/TextField';
import { ThemedWith } from '../../../../styling/helpers/ThemedWith';
import { ThemeVariant } from '../../../../styling/ThemeVariant';
import { useMixins } from '../../../../styling/helpers/mixins/useMixins';
import React, { FunctionComponent, ReactElement } from 'react';
import { useComponentTheme, useSettings, useThemingVariant } from '../../../../styling/settingsContext';

interface LoginFormProps {
  onChangeHandle: (handle: string) => void;
  onChangePassword: (password: string) => void;
  onLogin: () => void;
  errorMessage?: string;
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
    size: {
      width: settings.size(128)
    },
    headline: {
      size: {
        height: settings.size(12)
      }
    },
    errorMessage: {
      textSize: settings.textSizes.content,
      padding: {
        top: settings.gap(1)
      }
    },
    footer: {
      size: {
        height: settings.size(10)
      },
      padding: {
        horizontal: settings.gap(1)
      }
    },
    body: {
      padding: {
        horizontal: settings.gap(1),
        vertical: settings.gap(1)
      }
    }
  };
};

type ComponentTheme = InferComponentThemeOf<typeof componentThemeFactory>;
const lookup = getThemeLookupFunction<ComponentTheme>();

const headlineMixin = ({ settings, themingVariant }: MixinArgs<Settings, ThemeVariant>): string =>
  CssBuilder.new().
    add('font-size', settings.textSizes.headline).
    add('color', themingVariant === 'light' ? settings.textColor : settings.backgroundColor).
    add('background-color', settings.brandColor).
    toString();

const applyMixin = getApplyMixin<Settings, ThemeVariant>({
  useSettings,
  useThemingVariant
});

const Container = styled.form<ThemedWith<ComponentTheme>>`
  background-color: ${lookup('backgroundColor')};
  border: ${lookup('border.size')} solid ${lookup('border.color')};
  border-radius: ${lookup('border.radius')};
  width: ${lookup('size.width')};
  display: grid;
  grid-template-rows: ${lookup('headline.size.height')} auto ${lookup('footer.size.height')};
  grid-template-columns: auto auto auto;
  grid-template-areas:
    "headline headline headline"
    "body body body"
    "footer-left footer-center footer-right";
`;

const Headline = styled.div<ThemedWith<ComponentTheme>>`
  ${applyMixin(headlineMixin)}
  grid-area: headline;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div<ThemedWith<ComponentTheme>>`
  grid-area: body;
  padding: ${lookup('body.padding.vertical')} ${lookup('body.padding.horizontal')};
`;

const FooterRight = styled.div<ThemedWith<ComponentTheme>>`
  padding-right: ${lookup('footer.padding.horizontal')};
  grid-area: footer-right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ErrorMessage = styled.div<ThemedWith<ComponentTheme>>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${lookup('errorMessage.textSize')};
  padding-top: ${lookup('errorMessage.padding.top')};
`;

const LoginForm: FunctionComponent<LoginFormProps> =
  function ({
    onChangeHandle,
    onChangePassword,
    onLogin,
    errorMessage
  }): ReactElement {
    const { componentTheme } = useComponentTheme(componentThemeFactory);
    const mixins = useMixins({ settings, themingVariant });

    return (
      <Container componentTheme={ componentTheme }>
        <Headline
          mixins={ mixins }
          componentTheme={ componentTheme }
        >
          Login
        </Headline>

        <Body componentTheme={ componentTheme }>
          <TextField
            placeholder='Handle'
            onChange={
              (handle): void => {
                onChangeHandle(handle);
              }
            }
          />
          <PasswordTextField
            placeholder='Password'
            onChange={
              (password): void => {
                onChangePassword(password);
              }
            }
          />

          {
            errorMessage && (
              <ErrorMessage componentTheme={ componentTheme }>
                { errorMessage }
              </ErrorMessage>
            )
          }
        </Body>

        <FooterRight componentTheme={ componentTheme }>
          <Button label='Login' onClick={ (): void => onLogin() } />
        </FooterRight>
      </Container>
    );
  };

export {
  LoginForm
};
