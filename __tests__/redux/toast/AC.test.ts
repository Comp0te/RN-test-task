import { Actions, ActionTypes } from '../../../src/redux/toast/AC';

describe('Redux toast actions', () => {
  it(`creates a ${ActionTypes.TOAST_SHOW} action`, () => {
    expect(Actions.showToast('message')).toMatchSnapshot();
  });

  it(`creates a ${ActionTypes.TOAST_RESET} action`, () => {
    expect(Actions.hideToast()).toMatchSnapshot();
  });
});
