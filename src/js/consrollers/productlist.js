const product = require('../views/productlist.art');

class ProductList{
    constructor(){
        this.render()
    }
    render(){
        let html = product({});
        $('.wrap-productlist').html(html);
    }
}
new ProductList();