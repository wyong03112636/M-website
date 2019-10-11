const discoverView = require('../views/discover_page.art');

class Discover {
  constructor() {}
  render() {
    let html = discoverView();
    $('main').html(html);
  }
}
export default new Discover();
