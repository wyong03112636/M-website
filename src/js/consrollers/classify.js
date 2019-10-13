const classify = require("../views/classify.art");
class Classify {
  constructor() {}
  render() {
    let html = classify({});
    $(".wrap-classify").html(html);
  }
}
export default new Classify();
