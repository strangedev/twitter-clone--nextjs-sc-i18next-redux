import { Account as AccountModel } from '../../../domainModel/Account';
import { ComponentFactoryArgs } from '../../../styling/helpers/ComponentFactoryArgs';
import { getThemeLookupFunction } from '../../../styling/helpers/lookup';
import { InferComponentThemeOf } from '../../../styling/helpers/InferComponentThemeOf';
import { Settings } from '../../../styling/Settings';
import styled from 'styled-components';
import { useComponentTheme } from '../../../styling/settingsContext';
import { WithComponentTheme } from '../../../styling/helpers/WithComponentTheme';
import React, { FunctionComponent, ReactElement } from 'react';

interface AccountProps {
  account?: AccountModel;
}

const componentThemeFactory =
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function ({ settings }: ComponentFactoryArgs<Settings>) {
    return {
      infoCard: {
        border: {
          width: '1px',
          radius: settings.borderRadius,
          color: settings.brandColor
        },
        padding: settings.size(0.5),
        handle: {
          textSize: settings.textSizes.headline,
          textColor: settings.brandColor
        },
        bio: {
          textSize: settings.textSizes.content,
          textColor: settings.textColor,
          paddingTop: settings.size(0.5)
        }
      }
    };
  };

type ComponentTheme = InferComponentThemeOf<typeof componentThemeFactory>;
const lookup = getThemeLookupFunction<ComponentTheme>();

const InfoCard = styled.div<WithComponentTheme<ComponentTheme>>`
  border-radius: ${lookup('infoCard.border.radius')};
  border-color: ${lookup('infoCard.border.color')};
  border-style: solid;
  border-width: ${lookup('infoCard.border.width')};
  padding: ${lookup('infoCard.padding')};
`;

const Handle = styled.div<WithComponentTheme<ComponentTheme>>`
  font-size: ${lookup('infoCard.handle.textSize')};
  color: ${lookup('infoCard.handle.textColor')};
`;

const Bio = styled.div<WithComponentTheme<ComponentTheme>>`
  font-size: ${lookup('infoCard.bio.textSize')};
  color: ${lookup('infoCard.bio.textColor')};
  padding-top: ${lookup('infoCard.bio.paddingTop')};
`;

const Account: FunctionComponent<AccountProps> = function ({ account }): ReactElement {
  const { componentTheme } = useComponentTheme(componentThemeFactory);

  return (
    <InfoCard componentTheme={ componentTheme }>
      <Handle componentTheme={ componentTheme }>
        { account?.handle }
      </Handle>
      <Bio componentTheme={ componentTheme }>
        { account?.bio }
      </Bio>
    </InfoCard>
  );
};

export {
  Account
};
