export function asyncSum(a: number, b: number): Promise<number> {
  return new Promise((res) => {
    setTimeout(() => {
      return res(a + b);
    }, 100);
  });
}
