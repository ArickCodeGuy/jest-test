import { describe, expect, test } from '@jest/globals';
import { fib } from './fib';

describe('Fibonacci', () => {
  test('Fibonacci number 6 is 8', () => {
    expect(fib(6)).toBe(8);
  });

  test('Fibonacci number 1 is 1', () => {
    expect(fib(1)).toBe(1);
  });

  test('Fibonacci number 10 is 55', () => {
    expect(fib(10)).toBe(55);
  });

  test('Fibonacci of 0 throws error', () => {
    expect(() => fib(0)).toThrow(Error);
  });
});
