import { Button } from '../../../inputs/buttons/Button';
import { settingsCollection } from '../../../../styling/settingsCollection';
import { ThemeVariant } from '../../../../styling/ThemeVariant';
import { useThemingVariant } from '../../../../styling/settingsContext';
import React, { Fragment, FunctionComponent, ReactElement } from 'react';

const ThemeSwitcher: FunctionComponent = function (): ReactElement {
  const { setThemingVariant } = useThemingVariant();
  const themingVariants = Object.keys(settingsCollection) as ThemeVariant[];

  return (
    <div>
      {
        themingVariants.map((variant): ReactElement => (
          <Button
            key={ variant }
            label={ variant.toLocaleUpperCase() }
            onClick={
              (): void => {
                setThemingVariant(variant);
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
