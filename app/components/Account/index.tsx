import { ComponentThemeFactory } from 'react-component-theming';
import styled from 'styled-components';
import { Account as AccountModel } from '../../domainModel/Account';
import React, { FunctionComponent, ReactElement } from 'react';
import { WithComponentTheme } from '../../styling/helpers/WithComponentTheme';
import { Settings } from '../../styling/Settings';
import { useComponentTheme } from '../../styling/settingsContext';
import { ThemeVariant } from '../../styling/ThemeVariant';

interface AccountProps {
  account?: AccountModel;
}

interface ComponentTheme {
  infoCard: {
    border: {
      width: string;
      radius: string;
      color: string;
    };
    padding: string;
    handle: {
      textSize: string;
      textColor: string;
    };
    bio: {
      textSize: string;
      textColor: string;
    };
  };
}

const componentThemeFactory: ComponentThemeFactory<Settings, ThemeVariant, ComponentTheme> =
  function ({ settings }): ComponentTheme {
    return {
      infoCard: {
        border: {
          width: '1px',
          radius: settings.size(0.5),
          color: settings.brandColor
        },
        padding: settings.size(1),
        handle: {
          textSize: settings.textSizes.headline,
          textColor: settings.brandColor
        },
        bio: {
          textSize: settings.textSizes.content,
          textColor: settings.textColor
        }
      }
    };
  };

const InfoCard = styled.div<WithComponentTheme<ComponentTheme, unknown>>`
  border-radius: ${({ componentTheme }): string => componentTheme.infoCard.border.radius};
  border-color: ${({ componentTheme }): string => componentTheme.infoCard.border.color};
  border-style: solid;
  border-width: ${({ componentTheme }): string => componentTheme.infoCard.border.width};
  padding: ${({ componentTheme }): string => componentTheme.infoCard.padding};
`;

const Handle = styled.div<WithComponentTheme<ComponentTheme, unknown>>`
  font-size: ${({ componentTheme }): string => componentTheme.infoCard.handle.textSize};
  color: ${({ componentTheme }): string => componentTheme.infoCard.handle.textColor};
`;

const Bio = styled.div<WithComponentTheme<ComponentTheme, unknown>>`
  font-size: ${({ componentTheme }): string => componentTheme.infoCard.bio.textSize};
  color: ${({ componentTheme }): string => componentTheme.infoCard.bio.textColor};
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
