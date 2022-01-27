import axios from 'axios';
import { getClient } from '../../../../api/client/getClient';
import { LoginForm as LoginFormComponent } from '../LoginForm';
import { SessionState } from '../../../../store/slices/sessionsSlice';
import { startSession } from '../../../../store/actions/sessions/startSession';
import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/typing';

interface LoginFormProps {
  onSuccessfulLogin: () => void;
}

const LoginForm: FunctionComponent<LoginFormProps> = function ({
  onSuccessfulLogin
}): ReactElement {
  const apiClient = getClient(axios.create({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    baseURL: 'http://localhost:4000/'
  }));
  const dispatch = useAppDispatch();

  const [ handle, setHandle ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');

  const { session, error } = useAppSelector((state): SessionState => state.sessions);
  const errorMessage = error?.message;

  useEffect((): void => {
    if (session) {
      onSuccessfulLogin();
    }
  }, [ session ]);

  return (
    <LoginFormComponent
      onChangeHandle={
        (newHandle): void => {
          setHandle(newHandle);
        }
      }
      onChangePassword={
        (newPassword): void => {
          setPassword(newPassword);
        }
      }
      onLogin={
        (): void => {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          dispatch(startSession({
            apiClient,
            parameters: { handle, password }
          }));
        }
      }
      errorMessage={ errorMessage }
    />
  );
};

export {
  LoginForm
};
