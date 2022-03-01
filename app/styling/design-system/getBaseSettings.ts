import { Length } from '../css-in-js/quantities/Length';
import { GapFunction, getGapFunction } from './getGapFunction';
import { getSizeFunction, SizeFunction } from './getSizeFuntion';

interface BaseSettings {
  size: SizeFunction;
  gap: GapFunction;
}

const getBaseSettings = function (): BaseSettings {
  const size = getSizeFunction(Length.new(4, 'px'));

  return {
    size,
    gap: getGapFunction(size)
  };
};

export {
  getBaseSettings
};
export type {
  BaseSettings
};
