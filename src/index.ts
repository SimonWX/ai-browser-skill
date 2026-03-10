import { createBrowser } from "./browser.ts";
import { openPage } from "./actions/openPage.ts";
import { typeText } from "./actions/typeText.ts";

async function run() {
  const { browser, page } = await createBrowser();
  await openPage(page, "https://github.com");
  await typeText(page, "input[name='q']", "openlayers");
}

run();
