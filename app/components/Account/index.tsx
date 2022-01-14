import { Account as AccountModel } from '../../domainModel/Account';
import React, { FunctionComponent, ReactElement } from 'react';

interface AccountProps {
  account?: AccountModel;
}

const Account: FunctionComponent<AccountProps> = function ({ account }): ReactElement {
  return (
    <div>
      { account?.handle }
      { account?.bio }
    </div>
  );
};

export {
  Account
};
