import { toggleMessage } from './layout/index';

describe('Layout Actions', () => {
  describe('Actions Types', () => {
    test('should return an action type TOGGLE_MESSAGE', () => {
      expect(toggleMessage.type).toEqual('TOGGLE_MESSAGE');
    });
  });

  describe('Actions Creators', () => {
    test('should return the type of action', () => {
      expect(toggleMessage()).toEqual({ type: 'TOGGLE_MESSAGE'});
    });
  });
});