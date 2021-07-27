const capitalize = require('./capitalize');

test('String', () => {
  const newString = capitalize('willy');
  expect(newString).toBe('Willy');
})

test('Empty string', () => {
  const newString = capitalize('');
  expect(newString).toThrow();
})

test('Number', () => {
  const newString = capitalize(10);
  expect(newString).toThrow();
})