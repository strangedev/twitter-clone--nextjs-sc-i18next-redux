import { ComponentType } from 'react';

interface RequiredButtonContentProps {
  label: string;
}

type ButtonContentProps<TAdditionalProps> =
  RequiredButtonContentProps & TAdditionalProps;

type ButtonContent<TAdditionalProps = undefined> =
  ComponentType<ButtonContentProps<TAdditionalProps>>;

export type {
  ButtonContent
};
