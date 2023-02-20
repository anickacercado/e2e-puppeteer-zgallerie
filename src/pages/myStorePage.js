/**
 * This class is responsible for all branch editing operations
 */

class myStorePage {
  constructor(page, browser) {
    this.page = page;
    this.browser = browser;
    this.product = "a[data-testid='category-productTile-1']";
    this.addToCart = "input[data-testid='pdp-add-to-cart']";
    this.miniCart = "a[data-testid='header-miniCart']";
    this.viewCart = "#viewCart-CModal";
  }

  async goToMyStore() {
    await this.page.goto("https://www.zgallerie.com/c-15-objects", {
      timeout: 3000000,
      waitUntil: "load",
    });
  }

  async addItem() {
    await this.page.waitForSelector(this.product, {
      timeout: 100000,
    });
    await this.page.click(this.product);
    await this.page.waitForSelector(this.addToCart, {
      timeout: 100000,
    });
    await this.page.click(this.addToCart);
  }

  async viewCartPage() {
    await this.page.waitForSelector(this.miniCart, {
      timeout: 100000,
    });
    await this.page.click(this.miniCart);
    await this.page.waitForSelector(this.viewCart, {
      timeout: 100000,
    });
    await this.page.click(this.viewCart);
  }
}
export default myStorePage;
