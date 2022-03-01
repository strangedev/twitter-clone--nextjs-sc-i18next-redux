import { Length } from '../css-in-js/quantities/Length';
import { SizeFunction } from './getSizeFuntion';

type Gap = 1 | 2 | 4;
type GapFunction = (gap: Gap) => Length;

const getGapFunction = function (size: SizeFunction): GapFunction {
  return (gap: Gap): Length => size(gap * 2 as 2 | 4 | 8);
};

export {
  getGapFunction
};
export type {
  GapFunction
};
