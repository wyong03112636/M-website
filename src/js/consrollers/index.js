const layoutViews = require('../views/layout.art')
const bScroll = require('better-scroll');

class IndexView{
    constructor(){
        this.render()
        this.stretch()
    }
    render(){
        const html = layoutViews({});
        $('#root').html(html);
    }
    stretch(){
        let bscroll = new bScroll.default($('main').get(0))
    }
}
new IndexView();