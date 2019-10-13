const disPageView = require("../views/discount_page.art");
const listView = require('../views/discount-page-list.art')
import discountList from '../models/list'
const BetterScroll = require('better-scroll');


class DiscountPage {
  constructor() {}
  renderer(list){
    let dislist = listView({list})
    $('.recommend-list ul').html(dislist)
  }
  async render() {
    let html = disPageView();
    $("main").html(html);
    let count = await discountList.getDiscount({})
    let {data:list} = count;
    this.renderer(list);

    let bScroll = new BetterScroll.default('main', {
      probeType:2
    })
    // bScroll.on('scrollEnd', function() {
     
    // })
  }

}
export default new DiscountPage();
