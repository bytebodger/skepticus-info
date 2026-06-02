import { test, expect } from '@playwright/test';

test('gallery filter stays visible after scrolling down', async ({ page }) => {
    await page.goto('/gallery');

    const filter = page.locator('.gallery-filter-wrap');
    await expect(filter).toBeVisible();

    const initialBox = await filter.boundingBox();
    expect(initialBox).not.toBeNull();

    // Scroll the main content area down 1000px
    await page.evaluate(() => {
        const main = document.querySelector('.main') as HTMLElement;
        if (main && main.scrollHeight > main.clientHeight) {
            main.scrollTop = 1000;
        } else {
            window.scrollBy(0, 1000);
        }
    });

    await page.waitForTimeout(200);

    // The filter must still be visible in the viewport
    await expect(filter).toBeVisible();

    const afterScrollBox = await filter.boundingBox();
    expect(afterScrollBox).not.toBeNull();

    // The filter must remain near the top of the viewport (sticky behaviour)
    const viewportHeight = page.viewportSize()!.height;
    expect(afterScrollBox!.y).toBeGreaterThanOrEqual(0);
    expect(afterScrollBox!.y).toBeLessThan(viewportHeight * 0.25);

    // Its Y must not have drifted significantly (sticky = stays near top)
    const drift = afterScrollBox!.y - initialBox!.y;
    expect(drift).toBeLessThan(20);
});
