const percySnapshot = require('@percy/playwright');
let scrollToBottom = require("scroll-to-bottomjs");
const { test, expect } = require('@playwright/test');

const PORT = process.env.PORT_NUMBER || 8000;
const TEST_URL = `https://www.dolcegabbana.com/en/`;
const TEST_URL1 = `http://dev-dg.thelevelgroup.com/en/`;

test.beforeAll(async () => {
  // Set timeout for this hook.
  test.setTimeout(150000);
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
   

   await percySnapshot(page, 'Home Page Cookie');

   await page.waitForSelector('.cookiebanner__buttons__accept')
   await page.click('.cookiebanner__buttons__accept')

   //await page.waitForSelector('.fancybox-close ')
    //await page.click('.fancybox-close')

    await page.waitForSelector('.b-header-strip-on-banner_close')
    await page.click('.b-header-strip-on-banner_close')

    await page.waitForSelector('.js-language_selector-flyout-close')
    await page.click('.js-language_selector-flyout-close')

    await percySnapshot(page, 'Home Page');
    
    //await percySnapshot('header', {scope:'div.b-primary_logo-container_desktop'});

    await page.waitForSelector('#category-level_2-kids')
    await page.click('#category-level_2-kids')

    await page.waitForSelector('#link-food-beverage')
    await page.click('#link-food-beverage')

    await page.evaluate(scrollToBottom);

    await percySnapshot(page, 'food & berverage');


    await page.goto(TEST_URL);


    await page.waitForSelector('#link-beauty')
    await page.click('#link-beauty')


    await page.evaluate(scrollToBottom);

    await percySnapshot(page, 'beauty');


    await page.goto(TEST_URL);

    await page.waitForSelector('#link-fashion')
    await page.click('#link-fashion')
    

    await page.evaluate(scrollToBottom);

    await percySnapshot(page,'fashion');

    await page.goto(TEST_URL);

    await page.waitForSelector('#link-casa-home')
    await page.click('#link-casa-home')

    await percySnapshot(page, 'Case Home');
    
   /* await page.locator('//a[@aria-label="dg casa colazione"]').click();
    
   await page.locator('//span[@id="category-level_2-casa-home-arredamento"]').click();

   await percySnapshot(page, 'Category');

   // await page.locator('//span[@id="category-level_2-casa-home-living"]').click();

   // await page.evaluate(scrollToBottom);

  //  await percySnapshot(page, 'home living');*/




    

    

   

   


   



    
  });

