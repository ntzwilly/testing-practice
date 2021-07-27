const reverseString = require('./reverse');

test('Reversed string', () => {
  expect(reverseString('hello')).toBe('olleh');
})