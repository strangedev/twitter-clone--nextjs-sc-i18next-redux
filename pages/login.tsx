import { BaseLayout } from '../app/components/layout/BaseLayout';
import { LoginForm } from '../app/components/interactions/login/smartComponent/LoginForm';
import { useRouter } from 'next/router';
import React, { FunctionComponent, ReactElement } from 'react';
import { Centering } from '../app/components/layout/Centering';

const LoginPage: FunctionComponent = function (): ReactElement {
  const router = useRouter();

  return (
    <BaseLayout
      topBar={
        <div>
          Twötter
        </div>
      }
      body={
        <Centering>
          <LoginForm
            onSuccessfulLogin={
              (): void => {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                router.push('/tweets');
              }
            }
          />
        </Centering>
      }
    />
  );
};

export default LoginPage;
