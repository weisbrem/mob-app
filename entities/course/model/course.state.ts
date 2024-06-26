import { atom } from 'jotai';
import axios, { AxiosError } from 'axios';
import { authAtom } from '../../auth/model/auth.state';
import { API } from '../api/api';
import { ICourseState } from './course.interface';
import { IStudentCourseResponse } from './course.model';

export const courseAtom = atom<ICourseState>({
  courses: [],
  status: 'idle',
  errorMessage: null,
});

export const loadCourseAtom = atom(
  async (get) => {
    return get(courseAtom);
  },
  async (get, set) => {
    const { accessToken } = await get(authAtom);
    set(courseAtom, {
      courses: [],
      status: 'pending',
      errorMessage: null,
    });

    try {
      const { data } = await axios.get<IStudentCourseResponse[]>(API.courses, {
        params: {
          studentCourse: 'my',
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      set(courseAtom, {
        courses: data.flatMap(({ rest, progress }) => ({ ...rest, progress })),
        status: 'fulfilled',
        errorMessage: null,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        set(courseAtom, {
          courses: [],
          status: 'rejected',
          errorMessage: error.response?.data.message,
        });
      }
    }
  },
);
