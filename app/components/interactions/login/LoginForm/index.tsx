import { Button } from '../../../inputs/buttons/Button';
import { ComponentFactoryArgs } from '../../../../styling/helpers/ComponentFactoryArgs';
import { getThemeLookupFunction } from '../../../../styling/helpers/lookup';
import { InferComponentThemeOf } from '../../../../styling/helpers/InferComponentThemeOf';
import { PasswordTextField } from '../../../inputs/textfields/PasswordTextField';
import { Settings } from '../../../../styling/Settings';
import styled from 'styled-components';
import { TextField } from '../../../inputs/textfields/TextField';
import { useComponentTheme } from '../../../../styling/settingsContext';
import { WithComponentTheme } from '../../../../styling/helpers/WithComponentTheme';
import React, { FunctionComponent, ReactElement } from 'react';

interface LoginFormProps {
  onChangeHandle: (handle: string) => void;
  onChangePassword: (password: string) => void;
  onLogin: () => void;
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
    size: {
      width: settings.size(20),
      height: settings.size(8)
    },
    headline: {
      size: {
        height: settings.size(2),
        font: settings.textSizes.headline
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

const Container = styled.div<WithComponentTheme<ComponentTheme>>`
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

const Headline = styled.div<WithComponentTheme<ComponentTheme>>`
  grid-area: headline;
  background-color: ${lookup('headline.color.background')};
  color: ${lookup('headline.color.text')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${lookup('headline.size.font')};
`;

const Body = styled.div<WithComponentTheme<ComponentTheme>>`
  grid-area: body;
  padding: ${lookup('body.padding.vertical')} ${lookup('body.padding.horizontal')};
`;

const FooterRight = styled.div<WithComponentTheme<ComponentTheme>>`
  padding-right: ${lookup('footer.padding.horizontal')};
  grid-area: footer-right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const LoginForm: FunctionComponent<LoginFormProps> =
  function ({ onChangeHandle, onChangePassword, onLogin }): ReactElement {
    const { componentTheme } = useComponentTheme(componentThemeFactory);

    return (
      <Container componentTheme={ componentTheme }>
        <Headline componentTheme={ componentTheme }>
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
