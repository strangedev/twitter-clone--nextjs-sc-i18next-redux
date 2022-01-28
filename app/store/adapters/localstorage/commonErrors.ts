import { defekt } from 'defekt';

class ItemIsInvalid extends defekt({ code: 'ItemIsInvalid' }) {}
class ItemIsNotStored extends defekt({ code: 'ItemIsNotStored' }) {}

export {
  ItemIsInvalid,
  ItemIsNotStored
};
