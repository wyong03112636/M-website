const discount = require('../views/discount.art');

class Discount{
    constructor(){
        this.render()
    }
    render(){
        let html = discount({});
        $('.wrap-discount').html(html);
    }
}
new Discount()