# Test info

- Name: IButton screenshot test
- Location: C:\Users\anton\OneDrive\Рабочий стол\node\jest-test\src\components\IButton\IButton.test.ts:3:1

# Error details

```
Error: expect(page).toHaveScreenshot(expected)

  432 pixels (ratio 0.01 of all image pixels) are different.

Expected: C:\Users\anton\OneDrive\Рабочий стол\node\jest-test\src\playwright.test.ts-snapshots\IButton-screenshot-test-1-win32.png
Received: C:\Users\anton\OneDrive\Рабочий стол\node\jest-test\test-results\src-playwright-IButton-screenshot-test\IButton-screenshot-test-1-actual.png
    Diff: C:\Users\anton\OneDrive\Рабочий стол\node\jest-test\test-results\src-playwright-IButton-screenshot-test\IButton-screenshot-test-1-diff.png

Call log:
  - expect.toHaveScreenshot with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 432 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - 432 pixels (ratio 0.01 of all image pixels) are different.

    at C:\Users\anton\OneDrive\Рабочий стол\node\jest-test\src\components\IButton\IButton.test.ts:8:22
```

# Page snapshot

```yaml
- button "text2"
```

# Test source

```ts
   1 | import test, { expect } from 'playwright/test';
   2 |
   3 | test('IButton screenshot test', async ({ page }) => {
   4 |   await page.goto('http://localhost:3000/IButton');
   5 |
   6 |   await page.screenshot({ path: '__snap__/IButtonDemo.png' });
   7 |
>  8 |   await expect(page).toHaveScreenshot();
     |                      ^ Error: expect(page).toHaveScreenshot(expected)
   9 | });
  10 |
```