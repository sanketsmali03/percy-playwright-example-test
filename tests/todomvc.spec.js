const percySnapshot = require('@percy/playwright');
const { test, expect } = require('@playwright/test');

const PORT = process.env.PORT_NUMBER || 8000;
const TEST_URL = `https://www.dolcegabbana.com/en/`;
const TEST_URL2 = `http://dev-dg.thelevelgroup.com/en/`;

test.beforeAll(async () => {
  // Set timeout for this hook.
  test.setTimeout(120000);
});

test.beforeEach(async ({ page }, testInfo) => {
  // Extend timeout for all tests running this hook by 30 seconds.
  testInfo.setTimeout(testInfo.timeout + 60000);
});


test.describe('TodoMVC', function () {
 
  });

  test.beforeEach(async function ({ page }) {
    await page.goto(TEST_URL);
  });


  test('Lets you check off a todo', async function ({ page }) {
   
   //await page.setViewport({ width: 1440, height: 739 })

    //await navigationPromise

  //await page.waitForSelector('.fancybox-close')
   // await page.click('.fancybox-close')


    await page.waitForSelector('.cookiebanner__buttons__accept')
    await page.click('.cookiebanner__buttons__accept')

    


    await page.waitForSelector('.b-header-strip-on-banner_close')
    await page.click('.b-header-strip-on-banner_close')

    await page.waitForSelector('.js-language_selector-flyout-close')
    await page.click('.js-language_selector-flyout-close')
    

    await page.waitForSelector('#category-level_2-kids')
    await page.click('#category-level_2-kids')

    await page.waitForSelector('#link-casa-home')
    await page.click('#link-casa-home')

      // Clicking the link will indirectly cause a navigation.
    await page.locator('//a[@aria-label="dg casa colazione"]').click();
    
   await page.locator('//span[@id="category-level_2-casa-home-arredamento"]').click();

    //await page.locator('(//img[@title="Porcelain Espresso Set"])[3]').click();

    await page.locator('//span[@id="category-level_2-casa-home-living"]').click();

    await page.locator("//div[@aria-label='Visit Candles page']").click();

    await page.locator("(//a[@title='Scented Candle - Sicilian Orange'])[1]").click();

    await page.locator("//button[@title='Add to cart']").click();

   // await page.locator("//a[@title='Proceed to checkout']").click();



    

    

    
  });

