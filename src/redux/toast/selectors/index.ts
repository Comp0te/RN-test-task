import { RootState } from '../../store';

export const getToastMessage = (state: RootState) => state.toast.message;