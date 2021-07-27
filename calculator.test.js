const calculator = require('./calculator');

describe('add', () => {
  
  test('7' + '3', () => {
    const result  =  calculator.add(7, 5);
    expect(result).toBe(12);
  })

  test('0' + '15', () => {
    const result = calculator.add(0, 15);
    expect(result).toBe(15);
  })

  test('-14' + '16', () => {
    const result = calculator.add(-14, 16);
    expect(result).toBe(2);
  })

})

describe('subtract', () => {
  
  test("'7' - '3'", () => {
    const result  =  calculator.subtract(7, 5);
    expect(result).toBe(2);
  })

  test('10 - 15', () => {
    const result = calculator.subtract(10, 15);
    expect(result).toBe(-5);
  })

  test('-14 + -16', () => {
    const result = calculator.subtract(-14, 16);
    expect(result).toBe(-30);
  })

})

describe('divide', () => {
  
  test('7 / 3', () => {
    const result  =  calculator.divide(9, 3);
    expect(result).toBe(3);
  })

  test('7 / 2', () => {
    const result = calculator.divide(7, 2);
    expect(result).toBe(3.5);
  })

  test('14 / 0', () => {
    const result = calculator.divide(14, 0);
    expect(result).toBe(Infinity);
  })

})

describe('multiply', () => {
  
  test('7 * 3', () => {
    const result  =  calculator.multiply(7, 3);
    expect(result).toBe(21);
  })

  test('7 * -3', () => {
    const result = calculator.multiply(7, -3);
    expect(result).toBe(-21);
  })

  test('14 * 0', () => {
    const result = calculator.multiply(14, 0);
    expect(result).toBe(0);
  })

})

