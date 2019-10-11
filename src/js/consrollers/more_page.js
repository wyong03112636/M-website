const moreView = require('../views/more_page.art');

class More {
  constructor() {}
  render() {
    let html = moreView();
    $('main').html(html);
  }
}
export default new More();
