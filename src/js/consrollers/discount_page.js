const disPageView = require('../views/discount_page.art');

class DiscountPage {
  constructor() {}
  render() {
    let html = disPageView();
    $('main').html(html);
  }
}
export default new DiscountPage();
