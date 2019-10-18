const loginView = require('./views/login-page.art')

class Login{
    constructor(){
        this.render()
        this.bindEvent()
    }
    render(){
        let html = loginView({})
        $("#root").html(html);
    }
    bindEvent(){
        $('#register').on('tap', ()=>{
            location.href = 'http://localhost:9000/register.html';
        })
        $('#login').on('tap',()=>{
            this.request()
        })
    }
    request(){
        this.username = $('#username').val();
        this.password = $('#password').val();
        // console.log(this.username, this.password)
        $.ajax({
            url:'http://localhost:3000/login',
            data:{
                username:this.username,
                password:this.password
            },
            success:(res)=>{
               if(res){
                   location.href = 'http://localhost:9000/index.html'
               }else{
                   alert('账号密码不正确，请重新注册！')
               }
            }
        })
    }
}
new Login()