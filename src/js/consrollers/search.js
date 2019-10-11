const search = require('../views/search.art');

class Search {
  constructor() {}
  render() {
    let html = search({});
    $('.wrap-search').html(html);
  }
}
export default new Search();
