import { store } from './configureStore';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

// Type is fully inferred.
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type {
  AppDispatch,
  RootState
};
export {
  useAppDispatch,
  useAppSelector
};
