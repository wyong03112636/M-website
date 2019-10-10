import indexController from '../consrollers/index';
import discountController from '../consrollers/discount_page';
import discoverController from '../consrollers/discover_page';
import equipController from '../consrollers/equip_page';
import moreController from '../consrollers/more_page';

class Router{
    constructor(){
        this.bindEvent()
    }
    bindEvent(){
        window.addEventListener('load',this.hanelLoadPage.bind(this));
        window.addEventListener('hashchange', this.hanelHashChangePage.bind(this));
    }
    renderDom(hash){
        let pageController = {
            indexController,
            discountController,
            discoverController,
            equipController,
            moreController
        }
        pageController[hash + 'Controller'].render()
    }
    setAciveClass(hash){
        $(`footer li[data-page=${hash}]`).addClass('active').siblings().removeClass('active');
    }
    async hanelLoadPage(){
        await indexController.render()
        let hash = location.hash.substr(1) || 'index';
        location.hash = hash;
        this.renderDom(hash);
        this.setAciveClass(hash);
    }
    hanelHashChangePage(){
        let hash = location.hash.substr(1);
        this.renderDom(hash)
        this.setAciveClass(hash)
    }
}
new Router()