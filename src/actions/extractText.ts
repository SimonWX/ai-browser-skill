export async function extractText(page: any, selector: string) {
  const text = await page.textContent(selector);
  console.log("提取文本：", text);
  return text;
}
