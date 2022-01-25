import { Account as AccountModel } from '../../domainModel/Account';
import { ComponentFactoryArgs } from '../../styling/helpers/ComponentFactoryArgs';
import { InferComponentThemeOf } from '../../styling/helpers/InferComponentThemeOf';
import { Settings } from '../../styling/Settings';
import styled from 'styled-components';
import { useComponentTheme } from '../../styling/settingsContext';
import { WithComponentTheme } from '../../styling/helpers/WithComponentTheme';
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

const InfoCard = styled.div<WithComponentTheme<ComponentTheme>>`
  border-radius: ${({ componentTheme }): string => componentTheme.infoCard.border.radius};
  border-color: ${({ componentTheme }): string => componentTheme.infoCard.border.color};
  border-style: solid;
  border-width: ${({ componentTheme }): string => componentTheme.infoCard.border.width};
  padding: ${({ componentTheme }): string => componentTheme.infoCard.padding};
`;

const Handle = styled.div<WithComponentTheme<ComponentTheme>>`
  font-size: ${({ componentTheme }): string => componentTheme.infoCard.handle.textSize};
  color: ${({ componentTheme }): string => componentTheme.infoCard.handle.textColor};
`;

const Bio = styled.div<WithComponentTheme<ComponentTheme>>`
  font-size: ${({ componentTheme }): string => componentTheme.infoCard.bio.textSize};
  color: ${({ componentTheme }): string => componentTheme.infoCard.bio.textColor};
  padding-top: ${({ componentTheme }): string => componentTheme.infoCard.bio.paddingTop};
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
