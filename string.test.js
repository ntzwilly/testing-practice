const stringLength = require('./string');

test('Length of string.', () => {
  expect(stringLength('Hi Jest')).toBe(7);
});

test('The length of the string has to be at least 1', () => {
  expect(() => stringLength('')).toThrow();
});

test('The length of the string has to be less or equal to 10', () => {
  expect(() => stringLength('Hello World')).toThrow();
});