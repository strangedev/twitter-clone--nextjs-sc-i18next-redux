import { defekt } from 'defekt';

class Unauthorized extends defekt({ code: 'Unauthorized' }) {}

export {
  Unauthorized
};
