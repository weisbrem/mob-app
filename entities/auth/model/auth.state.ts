import { TFetchStatus } from '../../../shared/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

const storage = createJSONStorage<IAuthState>(() => AsyncStorage);

export const authAtom = atomWithStorage(
  'auth',
  {
    access_token: null,
    status: 'idle',
  },
  storage,
);

export interface IAuthState {
  access_token: string | null;
  status: TFetchStatus;
}
