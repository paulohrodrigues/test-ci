const { Index } = require('./index');

test('test', () => {
  expect(new Index().get()).toBe('test');
});