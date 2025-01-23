const dp = [1, 1];

/** Get i'th fibonacci number. Uses **cache** for quick get if value exists */
export function fib(n: number): number {
  if (n <= 0) throw new Error('Fibonacci number can be only greater than 0');

  if (dp[n - 1]) return dp[n - 1];

  let i = dp.length;

  while (i <= n) {
    dp.push(dp[dp.length - 1] + dp[dp.length - 2]);
    i++;
  }

  return dp[n - 1];
}
