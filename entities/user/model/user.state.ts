import { atom } from 'jotai';
import { authAtom } from '../../auth/model/auth.state';
import axios, { AxiosError } from 'axios';
import { IUserState } from './user.interface';
import { IUser } from './user.model';
import { API } from '../api/api';
import { Alert } from 'react-native';

export const profileAtom = atom<IUserState>({
  profile: null,
  status: 'idle',
  errorMessage: null,
});

export const updateProfileAtom = atom(
  async (get) => {
    return get(profileAtom);
  },
  async (get, set, { photo, name }: { photo: string; name: string }) => {
    const { accessToken } = await get(authAtom);
    set(profileAtom, {
      profile: null,
      status: 'pending',
      errorMessage: null,
    });

    try {
      const { data } = await axios.patch<IUser>(
        API.profile,
        {
          photo,
          name,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      set(profileAtom, {
        profile: data,
        status: 'fulfilled',
        errorMessage: null,
      });

      Alert.alert('Профиль успешно обновлен');
    } catch (error) {
      if (error instanceof AxiosError) {
        set(profileAtom, {
          profile: null,
          status: 'rejected',
          errorMessage: error.response?.data.message,
        });

        Alert.alert('Произошла ошибка. Попробуйте позже');
      }
    }
  },
);

export const loadProfileAtom = atom(
  async (get) => {
    return get(profileAtom);
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
