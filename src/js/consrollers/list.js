const listmodel = require('../views/list.art');
const listcount = require('../models/list');
const bScroll = require('better-scroll');
const loading = require('../views/loading.art');
class List {
  constructor() {
    this.list = [];
    this.pageNo = 2;
    this.pageSize = 20;
  }
  renderer(list) {
    let html = listmodel({ list });
    $('.wrap-list ul').html(html);
  }
  async render() {
    let that = this;
    let res = await listcount.get({
      pageNo: this.pageNo,
      pageSize: this.pageSize,
    });
    this.res = res;
    //首先加载不需要请求的数据
    let html = loading({});
    let $wrap_list = $('.wrap-list');
    $wrap_list.html(html);

    //加载请求的数据放入ul中
    let pro_infor = (this.list = res.data);
    this.renderer(pro_infor);

    //定义图像
    let $imgFoot = $('.foot img');
    let bscroll = new bScroll.default($('main').get(0), {
      probeType: 2,
    });
    bscroll.on('scrollEnd', async function() {
      // 上拉加载更多
      if (this.maxScrollY >= this.y && that.res.msg === 'ok') {
        that.pageNo++;
        $imgFoot.attr('src', '/assets/images/ajax-loader.gif');
        let res = await listcount.get({
          pageNo: that.pageNo,
          pageSize: that.pageSize,
        });
        let { data: list, msg } = res;
        that.list.msg = msg;

        that.list = [...that.list, ...list];
        that.renderer(that.list);
        bscroll.scrollBy(0, 40);
      }
      bscroll.refresh()
    });
    bscroll.on('scroll', function() {
      if (this.maxScrollY > this.y) {
        $imgFoot.addClass('up');
      }
    });
  }
}
export default new List();
