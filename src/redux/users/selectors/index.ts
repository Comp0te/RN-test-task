import { RootState } from '../../store';

export const getUsersEntities = (state: RootState) => state.users.entities;
export const getUsersAllIds = (state: RootState) => state.users.allIds;
