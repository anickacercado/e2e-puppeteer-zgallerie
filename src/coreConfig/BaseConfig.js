import puppeteer from "puppeteer";

/**
 *  This class is responsible for all browser/page launch related operations.
 */
class BaseConfig {
  /**
   *  It will lauch the browser with provided configuration.
   */
  async launchBrowser() {
    const browser = await puppeteer.launch({
      headless: false,
      args: ["--start-maximized"],
      defaultViewport: null,
      ignoreHTTPSErrors: true,
    });

    return await browser;
  }
}

export default BaseConfig;
