import { MixinArgs } from './MixinArgs';

type WithMixins <TSettings, TThemingVariants, TProps>
  = TProps & {
    mixins: MixinArgs<TSettings, TThemingVariants>;
  };

export type {
  WithMixins
};
