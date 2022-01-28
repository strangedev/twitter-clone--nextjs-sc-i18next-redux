import { Session } from '../../../domainModel/Session';
import { startSessionResponseSchema } from '../../../api/client/calls/sessions/startSessionCommand/startSessionResponseSchema';
import { error, Result, value } from 'defekt';
import { ItemIsInvalid, ItemIsNotStored } from './commonErrors';

const itemKey = 'session';

const storeSessionInLocalStorage = function (session: Session): void {
  window.localStorage.setItem(itemKey, JSON.stringify(session));
};

const loadSessionFromLocalStorage = function (): Result<Session, ItemIsNotStored | ItemIsInvalid> {
  const storedItem = window.localStorage.getItem(itemKey);

  if (storedItem === null) {
    return error(new ItemIsNotStored({
      data: { itemKey }
    }));
  }

  try {
    const deserializedItem = JSON.parse(storedItem);
    const parseItemResult = startSessionResponseSchema.parse(deserializedItem);

    if (parseItemResult.hasError()) {
      return error(new ItemIsInvalid({
        data: { itemKey },
        cause: parseItemResult.error
      }));
    }

    return value(parseItemResult.value);
  } catch (ex: unknown) {
    return error(new ItemIsInvalid({
      data: { itemKey },
      cause: ex
    }));
  }
};

const deleteSessionFromLocalStorage = function (): void {
  window.localStorage.removeItem(itemKey);
};

export {
  deleteSessionFromLocalStorage,
  loadSessionFromLocalStorage,
  storeSessionInLocalStorage
};
