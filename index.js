const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://youtube.com.br");
  await page.screenshot({ path: "rocketseat.png" });
  await page.waitForTimeout(9000);

  await browser.close();
})();
