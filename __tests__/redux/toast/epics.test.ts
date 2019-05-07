import { ActionsObservable } from 'redux-observable';
import {
  showAuthErrorToastEpic,
} from '../../../src/redux/toast/epics';
import { requestsAC } from '../../../src/redux/requests/AC';
import * as toastAC from '../../../src/redux/toast/AC';

describe('Auth epics', () => {
  it('should show toast with error after LOGIN_REQUEST fail', done => {
    const expectedResponse = toastAC.Actions.showToast('error');
    const action$ = ActionsObservable.of(requestsAC.login.Actions.loginFail('error'));

    showAuthErrorToastEpic(action$).subscribe((output: any) => {
      expect(output).toEqual(expectedResponse);
      done();
    });
  });

  it('should show toast with error after REGISTER_REQUEST fail', done => {
    const expectedResponse = toastAC.Actions.showToast('error');
    const action$ = ActionsObservable.of(requestsAC.register.Actions.registerFail('error'));

    showAuthErrorToastEpic(action$).subscribe((output: any) => {
      expect(output).toEqual(expectedResponse);
      done();
    });
  });

});