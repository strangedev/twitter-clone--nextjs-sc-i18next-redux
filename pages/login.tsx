import { BaseLayout } from '../app/components/layout/BaseLayout';
import { Centering } from '../app/components/layout/Centering';
import { LoginForm } from '../app/components/interactions/login/smartComponent/LoginForm';
import { Navigation } from '../app/components/interactions/navigate/smartComponent/Navigation';
import { useRouter } from 'next/router';
import React, { FunctionComponent, ReactElement } from 'react';

const LoginPage: FunctionComponent = function (): ReactElement {
  const router = useRouter();

  return (
    <BaseLayout
      topBar={ <Navigation /> }
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
