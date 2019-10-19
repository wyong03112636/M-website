const detailsView = require('../views/details-page.art');
const Swiper = require('swiper');
const detailsViewList = require('../views/details-page-list.art')
const getDetailsList = require('../models/details-list');

class Details {
    constructor() {}
    render() {
        let html = detailsView();
        $('.container').html(html);
        new Swiper.default('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
            },
            autoplay: true,
            loop: true,
          });
          this.renderer()
          this.bindEvent()
    }
    async renderer(){
        let res = await getDetailsList.getDetails({});
        let {comments:list} = res.data;
        let html = detailsViewList({list})
        $('.details-evaluate ul').html(html)
    }
    bindEvent(){
        $('#back').on('tap',()=>{
            location.hash = 'index'
        })
    }
}
export default new Details()

