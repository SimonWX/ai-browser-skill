export async function typeText(page: any, selector: string, text: string) {
  await page.waitForSelector(selector);
  await page.click(selector);
  await page.waitForTimeout(1000);
  await page.fill(selector, text);
  console.log("输入文本", text);
}
