import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  test('should generate linked list from set of values object snapshot', () => {
    const elements = [1, 2, 3];
    const result = generateLinkedList(elements);

    expect(result).toMatchSnapshot();
  });

  test('should generate linked list from different set of values object snapshot', () => {
    const elements = ['a', 'b', 'c'];
    const result = generateLinkedList(elements);

    expect(result).toMatchSnapshot();
  });

  test('should generate correct linked list from numeric values', () => {
    expect(generateLinkedList([1])).toStrictEqual({
      value: 1,
      next: { value: null, next: null },
    });

    expect(generateLinkedList([1, 2])).toStrictEqual({
      value: 1,
      next: { value: 2, next: { value: null, next: null } },
    });

    expect(generateLinkedList([1, 2, 3])).toStrictEqual({
      value: 1,
      next: { value: 2, next: { value: 3, next: { value: null, next: null } } },
    });
  });

  test('should generate correct linked list from numeric values snapshot', () => {
    expect(generateLinkedList([1])).toMatchSnapshot();
    expect(generateLinkedList([1, 2])).toMatchSnapshot();
    expect(generateLinkedList([1, 2, 3])).toMatchSnapshot();
  });
});
