import { RootState } from '../../../../../store';

export const getIsLoginRequestLoading = (state: RootState) => state.requests.auth.login.isLoading;
