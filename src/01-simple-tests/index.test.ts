import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator({
      a: 2,
      b: 3,
      action: Action.Add,
    });
    expect(result).toBe(5);
  });

  test('should substract two numbers', () => {
    const result: number | null = simpleCalculator({
      a: 5,
      b: 2,
      action: Action.Substract,
    });
    expect(result).toBe(3);
  });

  test('should multiply two numbers', () => {
    const result: number | null = simpleCalculator({
      a: 4,
      b: 3,
      action: Action.Multiply,
    });
    expect(result).toBe(12);
  });

  test('should divide two numbers', () => {
    const result: number | null = simpleCalculator({
      a: 10,
      b: 2,
      action: Action.Divide,
    });
    expect(result).toBe(5);
  });

  test('should exponentiate two numbers', () => {
    const result: number | null = simpleCalculator({
      a: 2,
      b: 3,
      action: Action.Exponentiate,
    });
    expect(result).toBe(8);
  });

  test('should return null for invalid action', () => {
    const result: number | null = simpleCalculator({
      a: 2,
      b: 3,
      action: 'invalidAction' as Action,
    });
    expect(result).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    const result: number | null = simpleCalculator({
      a: 'invalidArguments',
      b: '3',
      action: Action.Add,
    });
    expect(result).toBe(null);
  });
});
