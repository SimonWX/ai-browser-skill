import { chromium } from "playwright";

async function run() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.github.com");
  // await browser.close();
  console.log("页面已打开");
}

run();
