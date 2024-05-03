import {test, expect, Locator} from '@playwright/test';

test.describe('Playwright test', () => {
test('Should have title', async ({page}) => {
  await page.goto('https://playwright.dev/');
await expect(page).toHaveTitle(/Playwright/);
})
test('Should have the github text', async ({page}) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByText(/Star/)).toBeVisible();
})
test('Conditionally tag a test', 
{tag : '@tagged test'},
async ({page}) => {
  
  await page.goto('https://playwright.dev/');
  const community: Locator = page.getByRole("link", { name: "Community" });
  await expect(community).toBeVisible();
  await community.click();
  expect(page.url()).toBe("https://playwright.dev/community/welcome");

})
})