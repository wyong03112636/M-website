import indexController from '../consrollers/index';
import discountController from '../consrollers/discount_page';
import discoverController from '../consrollers/discover_page';
import equipController from '../consrollers/equip_page';
import moreController from '../consrollers/more_page';
import detailsController from "../consrollers/details-page";

class Router {
  constructor() {
    this.bindEvent();
  }
  bindEvent() {
    window.addEventListener('load', this.hanelLoadPage.bind(this));
    window.addEventListener('hashchange', this.hanelHashChangePage.bind(this));
  }
  renderDom(hash) {
    let pageController = {
      indexController,
      discountController,
      discoverController,
      equipController,
      moreController,
      detailsController
    };
    pageController[hash + 'Controller'].render();
    if(hash === 'index'){
      indexController.loadIndexModel();
    }
  }
  setAciveClass(hash) {
    $(`footer li[data-page=${hash}]`)
      .addClass('active')
      .siblings()
      .removeClass('active');
  }
  hanelLoadPage() {
    indexController.render()
    let hash = location.hash.substr(1) || 'index';
    location.hash = hash;
    this.renderDom(hash);
    this.setAciveClass(hash);
  }
  hanelHashChangePage() {
    let hash = location.hash.substr(1);
    if(hash === 'search') return null;
    this.renderDom(hash);
    this.setAciveClass(hash);
  }
}
new Router();
