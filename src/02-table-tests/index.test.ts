import { simpleCalculator, Action } from './index';

const testCases = [
  //Add
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  //Substract
  { a: 5, b: 2, action: Action.Substract, expected: 3 },
  { a: -10, b: 10, action: Action.Substract, expected: -20 },
  { a: 0, b: 0, action: Action.Substract, expected: 0 },
  //Divide
  { a: 10, b: 2, action: Action.Divide, expected: 5 },
  { a: 9, b: 2, action: Action.Divide, expected: 4.5 },
  { a: 7, b: 1, action: Action.Divide, expected: 7 },
  //Multiply
  { a: 2, b: 7, action: Action.Multiply, expected: 14 },
  { a: 0, b: 5, action: Action.Multiply, expected: 0 },
  { a: 4, b: 3, action: Action.Multiply, expected: 12 },
  //Exponentiate
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 3, b: 3, action: Action.Exponentiate, expected: 27 },
  { a: 1, b: 1, action: Action.Exponentiate, expected: 1 },
  //Invalid
  { a: 0, b: 0, action: 'wrong', expected: null },
  { a: 'wrong', b: 0, action: Action.Add, expected: null },
  { a: 0, b: 'wrong', action: Action.Multiply, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'should yield the accurate outcome for %p',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
});
