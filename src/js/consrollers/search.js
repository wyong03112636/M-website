const search = require('../views/search.art');
const searchView = require('../views/search-list.art');
const searchCount = require('../models/list');

class Search {
  constructor() {}
  render() {
    let html = search({});
    $('header').html(html);
    this.bindEvent()
    this.renderer()
  }
  bindEvent(){
    $('#sear').on('tap', ()=>{
     $('.tips').animate({
      opacity: 0.7
     },500,'linear')
    })
    $('#go-back').on('tap', ()=>{
      history.back();
    })
  }
  renderer(){
    $('.tips ul li').on('tap',async function(){
      location.hash = 'search';
      let keyword = $(this).attr('data-keyword')
      let res = await searchCount.getSearch({keyword:keyword})
      let {list} = res.data;
      let html = searchView({list})
      $('main').html(html)
    
        $('.tips').animate({
          opacity: 0
         },500,'linear')
  
    })
  }
}
export default new Search();
