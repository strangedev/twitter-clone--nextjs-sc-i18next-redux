import axios from 'axios';
import { getClient } from '../../../../api/client/getClient';
import { useAppDispatch } from '../../../../store/typing';
import { LoginForm as LoginFormComponent } from '../LoginForm';
import React, { FunctionComponent, ReactElement, useState } from 'react';

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
          alert({ handle, password });
        }
      }
    />
  );
};

export {
  LoginForm
};
