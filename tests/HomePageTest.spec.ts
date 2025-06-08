const {test, expect} = require('@playwright/test');

test('Home page', async ({page})=>{
    
    await page.goto('https://kiarugames.in/');

    const pageTitle = await page.title();
    console.log('Page Title:', pageTitle);
    
    const pageUrl = await page.url();
    console.log('Page URL:', pageUrl);

    await expect(page).toHaveTitle('Kiaru Games - Brick Breaker Holi, Mobile Games & More');
    await expect(page).toHaveURL('https://www.kiarugames.in/');

    await page.close();
})