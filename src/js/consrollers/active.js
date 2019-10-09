const active = require('../views/active.art');
class Active{
    constructor(){
        this.render()
    }
    render(){
        let html = active({});
        $('.wrap-active').html(html);
    }
}
new Active();