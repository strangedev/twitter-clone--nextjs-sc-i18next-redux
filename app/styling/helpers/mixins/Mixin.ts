import { BoundMixin } from './BoundMixin';

type Mixin <TSettings, TThemingVariant, TMixinProps> =
  (args: TMixinProps) => BoundMixin<TSettings, TThemingVariant>;

export type {
  Mixin
};
