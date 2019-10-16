const disPageView = require("../views/discount_page.art");
const listView = require('../views/discount-page-list.art')
import discountList from '../models/discount-list'
const BetterScroll = require('better-scroll');


class DiscountPage {
  constructor() {}
  renderer(list){
    let dislist = listView({list})
    $('.recommend-list ul').html(dislist)
    // 懒加载

    let src = $('.list-pic img').attr('data-src');
    let img = $('.list-pic img').get(0);
    this.loadImg(src, img)
  }
  loadImg(src, image){
    let img = new Image();
    img.src = src;
    img.addEventListener('load', function(){
      image.src = src;
    })
  }
  async render() {
    let that = this;
    let html = disPageView();
    $("main").html(html);
    let count = await discountList.getDiscount({})
    let {data:list} = count;
    this.list = list
    this.renderer(this.list);
    // 获取图片
    let $imgFoot = $('.foot img');
    let scroll = new BetterScroll.default('main', {
      scrollY:true,
      probeType:2
    })
    //滚动请求数据
    scroll.on('scrollEnd', async function() {
      if(this.maxScrollY > this.y && count.msg === 'ok' && location.hash == '#discount'){
        //该变图片显示
         $imgFoot.attr('src', '/assets/images/ajax-loader.gif');
        let count = await discountList.getDiscount({})
        let {data:list} = count;
        that.list = [...that.list, ...list]
        that.renderer(that.list);
      }
      scroll.refresh()
      
    })
  }

}
export default new DiscountPage();
