import { chromium } from "playwright";

export async function createBrowser() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  return { browser, page };
}
