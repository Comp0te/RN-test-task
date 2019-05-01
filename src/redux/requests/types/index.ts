export interface RequestState<T> {
  isLoading: boolean;
  errors: string | null;
  data: T | null;
}
