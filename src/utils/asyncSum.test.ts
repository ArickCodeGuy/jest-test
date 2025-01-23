import { expect, test } from '@jest/globals';
import { asyncSum } from './asyncSum';

test('async sum of 5 and 4 is 9', () => {
  return asyncSum(5, 4).then((res) => expect(res).toBe(9));
});
