import { Measurement } from './Measurement';

type Cent = '%';

type Percent = Measurement<number, Cent>;

export type {
  Cent,
  Percent
};
