const active = require("../views/active.art");
class Active {
  constructor() {}
  render() {
    let html = active({});
    $(".wrap-active").html(html);
  }
}
export default new Active();
