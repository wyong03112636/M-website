
const Name = require('./name.js');

const layoutViews = require('./views/layout.art')

const html = layoutViews({
    name:'lixu',
    haha : 'pig'
})
document.querySelector('#root').innerHTML = html;

Name.sayName()