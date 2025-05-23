import { expect, test } from '@jest/globals';

test('object assignment', () => {
  const data: Record<string, number> = {
    one: 1,
  };
  data['two'] = 2;

  expect(data).toEqual({ one: 1, two: 2 });
});
