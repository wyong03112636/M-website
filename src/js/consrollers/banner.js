const banner = require('../views/banner.art');
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