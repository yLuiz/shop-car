import messageReducer, { Types } from './layout/index';

describe('Layout Reducer', () => {
  describe('State of toggle message', () => {

    test('should return initial state', () => {
      const stateOfToggleMessage = messageReducer(undefined, {});

      expect(stateOfToggleMessage).toEqual({showMessage: false});
    });

    test('should turn false to true', () => {
      const stateOfToggleMessage = messageReducer({ showMessage: false }, { type: Types.TOGGLE_MESSAGE });

      expect(stateOfToggleMessage).toEqual({ showMessage: true });
    });

    test('should turn true to false', () => {
      const stateOfToggleMessage = messageReducer({ showMessage: true}, { type: Types.TOGGLE_MESSAGE });

      expect(stateOfToggleMessage).toEqual({ showMessage: false });
    });
  });
});