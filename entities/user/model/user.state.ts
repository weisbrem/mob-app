import { atom } from 'jotai';
import { authAtom } from '../../auth/model/auth.state';
import axios, { AxiosError } from 'axios';
import { IUserState } from './user.interface';
import { IUser } from './user.model';
import { API } from '../api/api';

export const profileAtom = atom<IUserState>({
  profile: null,
  status: 'idle',
  errorMessage: null,
});

export const loadProfileAtom = atom(
  async (get) => {
    get(profileAtom);
  },
  async (get, set) => {
    const { accessToken } = await get(authAtom);
    set(profileAtom, {
      profile: null,
      status: 'pending',
      errorMessage: null,
    });

    try {
      const { data } = await axios.get<IUser>(API.profile, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      set(profileAtom, {
        profile: data,
        status: 'fulfilled',
        errorMessage: null,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        set(profileAtom, {
          profile: null,
          status: 'rejected',
          errorMessage: error.response?.data.message,
        });
      }
    }
  },
);
