export async function openPage(page: any, url: any) {
  await page.goto(url);
  console.log("页面打开成功：", url);
}
