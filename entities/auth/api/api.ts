import { ApiRoutes } from '../../../shared/api-routes';

export const API = {
  login: `${process.env.EXPO_PUBLIC_API_PREFIX}${ApiRoutes.login}`,
};
