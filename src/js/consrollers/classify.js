const classify = require('../views/classify.art');
class Classify{
    constructor(){
        this.render()
    }
    render(){
        let html = classify({});
        $('.wrap-classify').html(html);
    }
}
new Classify();