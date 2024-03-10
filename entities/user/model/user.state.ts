import { atom } from 'jotai';
import { TFetchStatus } from '../../../shared/types';
import { IUser } from './user.model';

export const profileAtom = atom<IUserState>({
  profile: null,
  status: 'idle',
});

export interface IUserState {
  profile: IUser | null;
  status: TFetchStatus;
}
