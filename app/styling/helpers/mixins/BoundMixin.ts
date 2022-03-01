import { MixinArgs } from './MixinArgs';

type BoundMixin<TSettings, TThemingVariant> =
  (args: {
    mix
  }) => string;

export type {
  BoundMixin
};
