import { Button } from '../../../inputs/buttons/Button';
import { createLocalTheme } from '../../../../styling/GlobalTheme';
import { PasswordTextField } from '../../../inputs/textfields/PasswordTextField';
import styled from 'styled-components';
import { TextField } from '../../../inputs/textfields/TextField';
import React, { FunctionComponent, ReactElement } from 'react';

interface LoginFormProps {
  onChangeHandle: (handle: string) => void;
  onChangePassword: (password: string) => void;
  onLogin: () => void;
  errorMessage?: string;
}

const { from } = createLocalTheme(({ globalTheme }) => ({
  backgroundColor: globalTheme.backgroundColor,
  border: {
    color: globalTheme.brandColor,
    radius: globalTheme.borderRadius,
    size: globalTheme.borderSize
  },
  textColor: globalTheme.textColor,
  size: {
    width: globalTheme.size(128)
  },
  headline: {
    size: {
      height: globalTheme.size(12)
    }
  },
  errorMessage: {
    textSize: globalTheme.textSizes.content,
    padding: {
      top: globalTheme.gap(1)
    }
  },
  footer: {
    size: {
      height: globalTheme.size(10)
    },
    padding: {
      horizontal: globalTheme.gap(1)
    }
  },
  body: {
    padding: {
      horizontal: globalTheme.gap(1),
      vertical: globalTheme.gap(1)
    }
  }
}));

const Container = styled.form`
  background-color: ${from(theme => theme.backgroundColor)};
  border: ${from(theme => theme.border.size)} solid ${from(theme => theme.border.color)};
  border-radius: ${from(theme => theme.border.radius)};
  width: ${from(theme => theme.size.width)};
  display: grid;
  grid-template-rows: ${from(theme => theme.headline.size.height)} auto ${from(theme => theme.footer.size.height)};
  grid-template-columns: auto auto auto;
  grid-template-areas:
    "headline headline headline"
    "body body body"
    "footer-left footer-center footer-right";
`;

const Headline = styled.div`
  grid-area: headline;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  grid-area: body;
  padding: ${from(theme => theme.body.padding.vertical)} ${from(theme => theme.body.padding.horizontal)};
`;

const FooterRight = styled.div`
  padding-right: ${from(theme => theme.footer.padding.horizontal)};
  grid-area: footer-right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${from(theme => theme.errorMessage.textSize)};
  padding-top: ${from(theme => theme.errorMessage.padding.top)};
`;

const LoginForm: FunctionComponent<LoginFormProps> =
  function ({
    onChangeHandle,
    onChangePassword,
    onLogin,
    errorMessage
  }): ReactElement {
    return (
      <Container>
        <Headline>
          Login
        </Headline>

        <Body>
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
              <ErrorMessage>
                { errorMessage }
              </ErrorMessage>
            )
          }
        </Body>

        <FooterRight>
          <Button label='Login' onClick={ (): void => onLogin() } />
        </FooterRight>
      </Container>
    );
  };

export {
  LoginForm
};
