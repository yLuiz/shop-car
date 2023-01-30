import { Types, Creators as CreatorsLayout } from './layout/index';

describe('Layout Actions', () => {
  describe('Actions Types', () => {
    test('should return an action type TOGGLE_MESSAGE', () => {
      expect(Types.TOGGLE_MESSAGE).toEqual('TOGGLE_MESSAGE');
    });
  });

  describe('Actions Creators', () => {
    test('should return the type of action', () => {

      const { toggleMessage } = CreatorsLayout;
      const actionValue = toggleMessage().type;

      expect(actionValue).toEqual(Types.TOGGLE_MESSAGE);
    });
  });
});