import { RootState } from '../../store';

export const getIsAuthUser = (state: RootState) => state.auth.isAuthUser;
