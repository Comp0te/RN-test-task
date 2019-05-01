export interface RequestState<T> {
  isLoading: boolean;
  errors: string | null;
  data: T | null;
}

export interface AuthResponse {
  success: boolean;
  token: string;
}