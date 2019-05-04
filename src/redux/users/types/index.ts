import { UserModel } from '../../../shared/models/user.model';

export interface UsersState {
  entities: IEntities<UserModel>;
  allIds: string[];
}