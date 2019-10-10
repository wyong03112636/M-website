const equipView = require('../views/equip_page.art');

class Equip{
    constructor(){
    }
    render(){
        let html = equipView()
        $('main').html(html)
    }
}
export default new Equip()