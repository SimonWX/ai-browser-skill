export async function typeText(page: any, selector: string, text: string) {
  await page.fill(selector, text);
  console.log("输入文本", text);
}
