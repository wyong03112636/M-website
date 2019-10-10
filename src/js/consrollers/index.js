const layoutViews = require('../views/layout.art')
const Swiper = require('swiper');
import activeController from './active';
import bannerController from './banner';
import classifyController from './classify';
import discountController from './discount';
import hotactiveController from './hotactive';
import listController from './list';
import productlistController from './productlist';
import searchController from './search'; 

class IndexView{
    constructor(){ 
    }
    bindEvent(){
        location.hash = $(this).attr('data-page')

    }
    async render(){
        const html = await layoutViews({});
        console.log(html)
        $('#root').html(html);
        activeController.render();
        bannerController.render();
        new Swiper.default('.swiper-container', {
            pagination: {
                el:'.swiper-pagination',
            },
            autoplay: true,
            loop:true,
        });
        classifyController.render();
        discountController.render();
        hotactiveController.render();
        listController.render();
        productlistController.render();
        searchController.render();

        $('footer ul').on('click', "li",this.bindEvent)
    }   
    
}
export default new IndexView();
