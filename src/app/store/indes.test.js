import createStore from './index';

describe('store', () => {
  describe('createStore', () => {
    it('should be a function', () => {
      expect(typeof createStore).toBe('function');
    });
    it('should create the redux store', () => {
      const store = createStore();
      expect(typeof store.dispatch).toBe('function');
      expect(typeof store.getState).toBe('function');
    });
  });
});
