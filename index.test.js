const { Index } = require('./index');

test('test get', () => {
  expect(new Index().get()).toBe('test');
});

test('test post', () => {
  expect(new Index().post()).toBe('test post');
});