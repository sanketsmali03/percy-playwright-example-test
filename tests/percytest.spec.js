/*const { test, expect } = require('@playwright/test');

const puppeteer = require('puppeteer');
const browser = await puppeteer.launch()
const page = await browser.newPage()
const navigationPromise = page.waitForNavigation()


test('Lets you check off a todo', async function ({ page }) {

    await page.goto('https://www.dolcegabbana.com/en/')

await page.setViewport({ width: 1440, height: 739 })

await navigationPromise

await page.waitForSelector('#category-level_2-kids')
await page.click('#category-level_2-kids')

await page.waitForSelector('#link-food-beverage')
await page.click('#link-food-beverage')

await page.waitForSelector('.b-owl_carousel-item_active > #\\34 9cbf8912139df01b9505b07d5 > .b-product_tile-body > .js-producttile_name > .b-product_name-title')
await page.click('.b-owl_carousel-item_active > #\\34 9cbf8912139df01b9505b07d5 > .b-product_tile-body > .js-producttile_name > .b-product_name-title')

await navigationPromise

await page.waitForSelector('.l-pdp_primary_content > .l-pdp_primary_content-images > .l-pdp_primary_content-images_wrapper > .js-product-image_picture:nth-child(1) > .b-product-image')
await page.click('.l-pdp_primary_content > .l-pdp_primary_content-images > .l-pdp_primary_content-images_wrapper > .js-product-image_picture:nth-child(1) > .b-product-image')

await page.waitForSelector('.l-product_carousel-item:nth-child(1) > #\\38 7a72f6f0a1f0d0b8c73d30afd > .b-product-hover_box-wrapper:nth-child(2) > .b-product-hover_box:nth-child(1) .js-productimageslider:nth-child(1) > .owl-stage-outer:nth-child(1) > .owl-stage:nth-child(1) > .b-owl_carousel-item:nth-child(3) > .b-productimageslider-item:nth-child(1) .b-owl_carousel-image:nth-child(2)')
await page.click('.l-product_carousel-item:nth-child(1) > #\\38 7a72f6f0a1f0d0b8c73d30afd > .b-product-hover_box-wrapper:nth-child(2) > .b-product-hover_box:nth-child(1) .js-productimageslider:nth-child(1) > .owl-stage-outer:nth-child(1) > .owl-stage:nth-child(1) > .b-owl_carousel-item:nth-child(3) > .b-productimageslider-item:nth-child(1) .b-owl_carousel-image:nth-child(2)')

await page.waitForSelector('.l-pdp_primary_content-block > .l-pdp_primary_content-block-inner > .b-product_add_to_cart > #dwfrm_product_addtocart_d0ipgllhugpz > .js-add_to_cart')
await page.click('.l-pdp_primary_content-block > .l-pdp_primary_content-block-inner > .b-product_add_to_cart > #dwfrm_product_addtocart_d0ipgllhugpz > .js-add_to_cart')

await navigationPromise

await page.waitForSelector('.b-mini_cart-flyout > .b-mini_cart-flyout-bottom > .minicart--bottom_buttons > .b-mini_cart-checkout_btn_wrapper > .b-mini_cart-checkout_btn')
await page.click('.b-mini_cart-flyout > .b-mini_cart-flyout-bottom > .minicart--bottom_buttons > .b-mini_cart-checkout_btn_wrapper > .b-mini_cart-checkout_btn')

await navigationPromise

await browser.close()
})*/