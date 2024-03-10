import { TFetchStatus } from '../../../shared/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import { IAuthRequest, IAuthResponse } from './auth.interfaces';
import axios, { AxiosError } from 'axios';
import { API } from '../api/api';

const storage = createJSONStorage<IAuthState>(() => AsyncStorage);

const InitialState: IAuthState = {
  accessToken: null,
  status: 'idle',
  errorMessage: null,
};

export const authAtom = atomWithStorage('auth', InitialState, storage);

export const loginAtom = atom(
  (get) => get(authAtom),
  async (_get, set, { email, password }: IAuthRequest) => {
    set(authAtom, {
      accessToken: null,
      status: 'pending',
      errorMessage: null,
    });

    try {
      const { data } = await axios.post<IAuthResponse>(API.login, {
        email,
        password,
      });

      set(authAtom, {
        accessToken: data.access_token,
        status: 'fulfilled',
        errorMessage: null,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        set(authAtom, {
          accessToken: null,
          status: 'rejected',
          errorMessage: error.response?.data.message,
        });
      }
    }
  },
);

export const logoutAtom = atom(null, (_get, set) => {
  set(authAtom, InitialState);
});

export interface IAuthState {
  accessToken: string | null;
  status: TFetchStatus;
  errorMessage: string | null;
}
