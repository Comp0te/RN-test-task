import { ajax, AjaxResponse } from 'rxjs/ajax';
import { from, Observable } from 'rxjs';
import AsyncStorage from '@react-native-community/async-storage';
import { apiEndpoint } from '../constants/apiEndpoint';

export interface AuthInput {
  readonly username: string;
  readonly password: string;
}

interface IAuthService {
  getToken(): Observable<string | null>;
  setToken(token: string): Observable<void>;
  removeToken(): Observable<void>;
  login(input: AuthInput): Observable<AjaxResponse>;
  register(input: AuthInput): Observable<AjaxResponse>;
}

class AuthService implements IAuthService {
  private KEY_TOKEN = 'auth_token';

  getToken() {
    return from(AsyncStorage.getItem(this.KEY_TOKEN));
  }

  setToken(token: string) {
    return from(AsyncStorage.setItem(this.KEY_TOKEN, token));
  }

  removeToken() {
    return from(AsyncStorage.removeItem(this.KEY_TOKEN));
  }

  login(input: AuthInput) {
    return ajax.post(
      apiEndpoint + 'login/',
      JSON.stringify(input),
      {
        'Content-Type': 'application/json; charset=utf-8',
      },
    );
  }

  public register(input: AuthInput) {
    return ajax.post(
      apiEndpoint + 'register/',
      JSON.stringify(input),
      {
        'Content-Type': 'application/json; charset=utf-8',
      },
    );
  }
}

export default new AuthService();