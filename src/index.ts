import { createBrowser } from "./browser.ts";
import { execute } from "./executor.ts";

async function run() {
  const { browser, page } = await createBrowser();
  await execute(page, "open_page", {
    url: "https://github.com",
  });
  await page.waitForTimeout(2000);
  await page.locator('button[placeholder="Search or jump to..."]').click();
  await execute(page, "type_text", {
    selector: "input[id='query-builder-test']",
    text: "wechat-pay",
  });
}

run();
