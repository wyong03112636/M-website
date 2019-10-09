const list = require('../views/list.art')
const listcount = require('../models/list');

class List{
    constructor(){
        this.render()
    }
    async render(){
        let res = await listcount.get({pageNo:4});
        res = res.data;
        console.log(res);
        let html = list({res})
        $('.wrap-list').html(html);
    }
}
new List();

