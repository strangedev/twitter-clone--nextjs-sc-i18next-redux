import { Account as AccountModel } from '../../../domainModel/Account';
import { createLocalTheme } from '../../../styling/GlobalTheme';
import styled from 'styled-components';
import React, { FunctionComponent, ReactElement } from 'react';

interface AccountProps {
  account?: AccountModel;
}

const { from } = createLocalTheme(({ globalTheme }) => ({
  infoCard: {
    border: {
      width: globalTheme.borderSize,
      radius: globalTheme.borderRadius,
      color: globalTheme.brandColor
    },
    padding: globalTheme.gap(1),
    handle: {
      textSize: globalTheme.textSizes.headline,
      textColor: globalTheme.brandColor
    },
    bio: {
      textSize: globalTheme.textSizes.content,
      textColor: globalTheme.textColor,
      paddingTop: globalTheme.gap(1)
    }
  }
}));

const InfoCard = styled.div`
  border-radius: ${from(theme => theme.infoCard.border.radius)};
  border-color: ${from(theme => theme.infoCard.border.color)};
  border-style: solid;
  border-width: ${from(theme => theme.infoCard.border.width)};
  padding: ${from(theme => theme.infoCard.padding)};
`;

const Handle = styled.div`
  font-size: ${from(theme => theme.infoCard.handle.textSize)};
  color: ${from(theme => theme.infoCard.handle.textColor)};
`;

const Bio = styled.div`
  font-size: ${from(theme => theme.infoCard.bio.textSize)};
  color: ${from(theme => theme.infoCard.bio.textColor)};
  padding-top: ${from(theme => theme.infoCard.bio.paddingTop)};
`;

const Account: FunctionComponent<AccountProps> = function ({ account }): ReactElement {
  return (
    <InfoCard>
      <Handle>
        { account?.handle }
      </Handle>
      <Bio>
        { account?.bio }
      </Bio>
    </InfoCard>
  );
};

export {
  Account
};
