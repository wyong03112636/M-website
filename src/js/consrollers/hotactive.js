const hotactive = require('../views/hotactive.art');
class HotActive{
    constructor(){
        this.render()
    }
    render(){
        let html = hotactive({});
        $('.wrap-hotactive').html(html);
    }
}
new HotActive();
