const search = require('../views/search.art');

class Search{
    constructor(){
        this.render();
    }
    render(){
        let html = search({});
        $('.wrap-search').html(html);
    }
}
new Search();
