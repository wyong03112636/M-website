const banner = require('../views/banner.art');

class Banner{
    constructor(){
    }
    render(){
        const html = banner({});    
        $('.wrap-banner').html(html);
    } 
}
export default new Banner();
