import { Mixin } from './Mixin';

type InferMixinNamesOf <TMixins> = TMixins extends Record<infer TMixinNames, Mixin<any, any>> ? TMixinNames : never;

export type {
  InferMixinNamesOf
};
