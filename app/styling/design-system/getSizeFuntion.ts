import { Length } from '../css-in-js/quantities/Length';

type Step = 0 | 'px' | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 | 72 | 80 | 96 | 112 | 128 | 192 | 256;
type SizeFunction = (step: Step) => Length;

const getSizeFunction = (unitLength: Length): SizeFunction =>
  (step: Step): Length => {
    if (step === 'px') {
      return Length.new(1, 'px');
    }

    return unitLength.setValue(unitLength.value * step);
  };

export type {
  SizeFunction
};
export {
  getSizeFunction
};
