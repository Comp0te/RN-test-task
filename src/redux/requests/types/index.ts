import { AjaxError } from 'rxjs/ajax';

export interface RequestState<T> {
  isLoading: boolean;
  errors: string | AjaxError | null;
  data: T | null;
}

export interface AuthResponse {
  success: boolean;
  token: string;
}