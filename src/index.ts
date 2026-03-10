import { createBrowser } from "./browser.ts";
import { openPage } from "./actions/openPage.ts";

async function run() {
  const { browser, page } = await createBrowser();
  await openPage(page, "https://github.com");
}

run();
