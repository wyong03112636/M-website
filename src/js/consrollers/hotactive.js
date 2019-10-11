const hotactive = require('../views/hotactive.art');
class HotActive {
  constructor() {}
  render() {
    let html = hotactive({});
    $('.wrap-hotactive').html(html);
  }
}
export default new HotActive();
