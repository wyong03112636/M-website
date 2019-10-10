const discount = require('../views/discount.art');

class Discount{
    constructor(){
    }
    render(){
        let html = discount({});
        $('.wrap-discount').html(html);
    }
}
export default new Discount()