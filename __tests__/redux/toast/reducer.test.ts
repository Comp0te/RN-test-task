import { Actions, ActionTypes } from '../../../src/redux/toast/AC';
import {
  toastReducer,
  initialState as toastInitialState,
} from '../../../src/redux/toast/reducers';

describe('Redux toast reducers', () => {
  it(`update state after ${ActionTypes.TOAST_SHOW} action`, () => {
    expect(toastReducer(
      toastInitialState,
      Actions.showToast('message')),
    ).toMatchSnapshot();
  });

  it(`update state after ${ActionTypes.TOAST_RESET} action`, () => {
    expect(toastReducer(
      toastInitialState,
      Actions.hideToast()),
    ).toMatchSnapshot();
  });
});
