import { SessionState } from '../../store/slices/sessionsSlice';
import { useAppSelector } from '../../store/typing';

interface AuthenticationStatus {
  isAuthenticated: boolean;
  session?: SessionState['session'];
}

const useAuthentication = function (): AuthenticationStatus {
  const { session } = useAppSelector((state): SessionState => state.sessions);

  return {
    isAuthenticated: session !== undefined,
    session
  };
};

export {
  useAuthentication
};
