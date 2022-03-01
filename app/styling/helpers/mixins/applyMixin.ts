import { BoundMixin } from './BoundMixin';
import { UseSettings } from 'react-component-theming/build/UseSettings';
import { UseThemingVariant } from 'react-component-theming/build/UseThemingVariant';

const getApplyMixin = function <TSettings, TThemingVariants extends string> (hooks: {
  useSettings: UseSettings<TSettings>;
  useThemingVariant: UseThemingVariant<TThemingVariants>;
}): (mixin: BoundMixin<TSettings, TThemingVariants>) => string {
  return (mixin: BoundMixin<TSettings, TThemingVariants>): string => {
    const { settings } = hooks.useSettings();
    const { themingVariant } = hooks.useThemingVariant();

    return mixin({ settings, themingVariant });
  };
};

export {
  getApplyMixin
};
