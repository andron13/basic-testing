import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    const elements = [1, 2, 3];
    const result = generateLinkedList(elements);

    expect(result).toMatchSnapshot();
  });

  test('should generate linked list from values 2', () => {
    const elements = ['a', 'b', 'c'];
    const result = generateLinkedList(elements);

    expect(result).toMatchSnapshot();
  });
});
