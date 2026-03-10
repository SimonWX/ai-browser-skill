import { createBrowser } from "./browser.ts";
import { openPage } from "./actions/openPage.ts";
// import { typeText } from "./actions/typeText.ts";
import { extractText } from "./actions/extractText.ts";

async function run() {
  const { browser, page } = await createBrowser();
  await openPage(page, "https://news.ycombinator.com");
  //   await typeText(page, "input[name='q']", "openlayers");
  const title = await extractText(page, ".titleline a");
  console.log("首页标题", title);
}

run();
