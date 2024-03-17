import { TFetchStatus } from '../../../shared/common.types';
import { IUser } from './user.model';

export interface IUserState {
  profile: IUser | null;
  status: TFetchStatus;
  errorMessage: string | null;
}
