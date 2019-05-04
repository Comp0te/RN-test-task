import { RootState } from '../../../../../store';

export const getIsRegisterRequestLoading = (state: RootState) => state.requests.auth.register.isLoading;
