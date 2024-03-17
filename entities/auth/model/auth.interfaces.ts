import { TFetchStatus } from '../../../shared/common.types';

export interface IAuthResponse {
  access_token: string;
}

export interface IAuthRequest {
  email: string;
  password: string;
}

export interface IAuthState {
  accessToken: string | null;
  status: TFetchStatus;
  errorMessage: string | null;
}
