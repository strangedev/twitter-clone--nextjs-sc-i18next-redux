import { loadSessionFromLocalStorage } from '../localstorage/session';
import { restoreSession } from '../../slices/sessionsSlice';
import { useAppDispatch } from '../../typing';
import { FunctionComponent, useEffect } from 'react';

const RestoreSession: FunctionComponent = function (): null {
  const dispatch = useAppDispatch();

  useEffect((): void => {
    const previousSession = loadSessionFromLocalStorage();

    if (!previousSession.hasError()) {
      dispatch(restoreSession(previousSession.value));
    }
  }, []);

  return null;
};

export {
  RestoreSession
};
