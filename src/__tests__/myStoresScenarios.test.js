import myStorePage from "../pages/myStorePage";
import baseConfig from "../coreConfig/BaseConfig";

let page, browser, baseConf, myStore, testName;

beforeAll(async () => {
  baseConf = new baseConfig();
  browser = await baseConf.launchBrowser();

  const pages = await browser.pages();
  page = pages[0]; // by default "about:blank"

  myStore = new myStorePage(page, browser);
});

describe("[REGRESSION] My store page", () => {
  test("[UI] Go to my store page", async () => {
    testName = "[UI] Go to my store page";
    await myStore.goToMyStore();
    await page.waitForXPath("//*[@id='mini-cart']/span[2][contains(.,'0')]", {
      timeout: 100000,
    });
  });

  test("[UI] Adds an item to the cart", async () => {
    testName = "[UI] Adds an item to the cart";
    await myStore.addItem();
    await page.waitForXPath("//*[@id='mini-cart']/span[2][contains(.,'1')]", {
      timeout: 100000,
    });
  });

  test("[UI] Goes to the View Cart page", async () => {
    testName = "[UI] Goes to the View Cart page";
    await myStore.viewCartPage();
    //Should contain assert
  });
});

afterEach(async () => {
  await page.screenshot({ path: testName + ".png" });
  console.log("-- End of scenario execution --");
});

afterAll(async () => {
  if (browser) await browser.close();
});
