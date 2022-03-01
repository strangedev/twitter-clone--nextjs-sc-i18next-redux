import { MixinArgs } from './MixinArgs';

const useMixins = function <TSettings, TThemingVariants> ({
  settings,
  themingVariant
}: MixinArgs<TSettings, TThemingVariants>): { mixins: MixinArgs<TSettings, TThemingVariants> } {
  return {
    mixins: {
      settings,
      themingVariant
    }
  };
};

export {
  useMixins
};
