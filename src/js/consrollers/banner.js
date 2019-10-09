const banner = require('../views/banner.art');
const Swiper = require('swiper');
class Banner{
    constructor(){
        this.render();
    }
    render(){
        const html = banner({});    
        $('.wrap-banner').html(html);
    }
}
new Banner();
new Swiper.default('.swiper-container', {
    pagination: {
        el:'.swiper-pagination',
    },
    autoplay: true,
    loop:true,
});