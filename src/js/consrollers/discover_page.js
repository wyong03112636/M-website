const discoverView = require("../views/discover_page.art");
const Swiper = require('swiper');
const BScroll = require('better-scroll');
const discoverViewList = require('../views/discover-page-list.art')
import discoverLIst from "../models/discover-list";

class Discover {
  constructor() {}
  renderer(res){
    let html = discoverViewList({res})
    $('.discover-list ul').html(html);
  }
  async render() {
    let html = discoverView();
    $("main").html(html);
    new Swiper.default('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: true,
      loop: true,
    });
    new BScroll.default($('.discover-scroll').get(0), {
      scrollX:true,
      probeType:2
    })
    let res = await discoverLIst.getDiscover({})
    res = res.data;
    this.renderer(res);
    new BScroll.default('main', {
      scrollY:true,
      probeType:2
    })
  }
}
export default new Discover();
