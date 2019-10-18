const moreView = require('../views/more_page.art');

class More {
  constructor() {}
  render() {
    let html = moreView();
    $('main').html(html);
    this.bindEvent()
  }
  bindEvent() {
    $('#login').on('tap', ()=>{
      location.href = 'http://localhost:9000/login.html'
    })
    $('#register').on('tap', ()=>{
      location.href = 'http://localhost:9000/register.html'
    })
  }
}
export default new More();
