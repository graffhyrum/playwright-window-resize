import {expect, test as base} from '@playwright/test';
import * as si from "systeminformation";


const test = base.extend({
  viewport: async ({}, use) => {
    const graphics = await si.graphics();
    // const {currentResX: width, currentResY: height} = graphics.displays[0]; // use whatever display and resolution property you want
    const {resolutionX: width, resolutionY: height} = graphics.displays[0]; // use whatever display and resolution property you want
    await use({
      width,
      height,
    });
  }
});

test('has title', async ({page}) => {
  await page.goto('https://playwright.dev/');
  
  // Expect a title "to contain" a substring.
  await expect(page)
    .toHaveTitle(/Playwright/);
});



