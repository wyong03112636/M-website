const product = require('../views/productlist.art');

class ProductList{
    constructor(){
    }
    render(){
        let html = product({});
        $('.wrap-productlist').html(html);
    }
}
export default new ProductList();