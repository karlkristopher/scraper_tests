const puppeteer = require("puppeteer");

async function scrapeProduct(url) {
  const browser = await puppeteer.launch({executablePath: '/usr/bin/chromium-browser'});
  console.log(await browser.version());
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x('//*[@id="price_inside_buybox"]');

  const src = await el.getProperty("src");

  const srcText = await src.jsonValue();

  console.log("srcTxt", { srcTxt });
}

scrapeProduct(
  "https://www.amazon.ca/gp/product/B075Y8ZVBB?pf_rd_r=HPSX3S1VCRRCFEJ7BK8X&pf_rd_p=05326fd5-c43e-4948-99b1-a65b129fdd73"
);
