require("dotenv").config();
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 1700 });
  await page.goto("https://instagram.com");

  // await page.waitForTimeout(1000 * 1000);

  await page.waitForTimeout(1000);
  await page.type('input[name="username"]', process.env.ACCOUNT);
  await page.type('input[name="password"]', process.env.PASSWORD);
  await page.waitForTimeout(1000);
  await page.click('[type="submit"]');
  // await page.waitForTimeout(8000);
  await page.waitForNavigation();
  await page.click("button:nth-child(1)");
  await page.waitForTimeout(9000);
  // await page.waitForNavigation();
  await page.click('button[class="aOOlW   HoLwm "]');

  await page.waitForTimeout(1000 * 600);
  // await page.waitForTimeout(1000 * 10);

  // await page.waitForNavigation();
  console.log("logged");

  //access login page
  // await page.click('a[class="cLLOA p1cWU jpBZ0 EzsBC KHq0c XHI2L"]');
  // await page.type('input[name="user[email]"]', LOGIN);
  // await page.type('input[name="user[password]"]', SENHA);
  // await page.click('input[type="submit"]');

  // await page.waitForNavigation();

  // document.querySelector('a[class="cLLOA p1cWU jpBZ0 EzsBC KHq0c XHI2L"]')

  // ('button[type="Like photo"]');
  await browser.close();
})();

// document.querySelector('input[type="search"][name="searchKeyword"]')
// input.ctM_F.gdt34
// EIP4361,
// document.querySelector('input[name="user[password]"]')
// document.querySelector('input[type="submit"]')
