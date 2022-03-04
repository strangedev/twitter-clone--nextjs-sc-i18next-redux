import { Button } from '../../../inputs/buttons/Button';
import { useTheme } from '../../../../styling/GlobalTheme';
import React, { FunctionComponent, ReactElement } from 'react';

const ThemeSwitcher: FunctionComponent = function (): ReactElement {
  const { availableVariants, switchVariant } = useTheme();

  return (
    <div>
      {
        availableVariants.map((variant): ReactElement => (
          <Button
            key={ variant }
            label={ variant.toLocaleUpperCase() }
            onClick={
              (): void => {
                switchVariant(variant);
              }
            }
          />
        ))
      }
    </div>
  );
};

export {
  ThemeSwitcher
};
