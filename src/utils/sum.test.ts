import { sum } from './sum';
import { expect, test } from '@jest/globals';

test('adding 1 and 2 gives 3', () => {
  expect(sum(1, 2)).toBe(3);
});
