const layoutViews = require('../views/layout.art')

class IndexView{
    constructor(){
        this.render()
    }
    render(){
        const html = layoutViews({});
        $('#root').html(html);
    }
}
new IndexView();