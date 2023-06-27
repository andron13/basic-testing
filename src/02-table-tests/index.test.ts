import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  // continue cases for other actions
  { a: 5, b: 2, action: Action.Substract, expected: 3 },
  { a: 100, b: 100, action: Action.Substract, expected: 0 },
  { a: 0, b: 0, action: Action.Substract, expected: 0 },
];

describe('simpleCalculator', () => {
  test.each(testCases.filter((item) => item.action === Action.Add))(
    'should add two numbers',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    },
  );

  test.each(testCases.filter((item) => item.action === Action.Substract))(
    'should substract two numbers',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    },
  );
});
