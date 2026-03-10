import { openPage } from "./actions/openPage.ts";
import { typeText } from "./actions/typeText.ts";
import { extractText } from "./actions/extractText.ts";

export async function execute(page: any, action: string, params: any) {
  switch (action) {
    case "open_page":
      return openPage(page, params.url);
    case "type_text":
      return typeText(page, params.selector, params.text);
    case "extract_text":
      return extractText(page, params.selector);
    default:
      throw new Error("未知 action");
  }
}
