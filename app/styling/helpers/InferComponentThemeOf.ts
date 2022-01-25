import { ComponentFactoryArgs } from './ComponentFactoryArgs';

type InferComponentThemeOf<TFactory extends (args: ComponentFactoryArgs<any>) => any> =
  ReturnType<TFactory>;

export type {
  InferComponentThemeOf
};
