const registerView = require("./views/register-page.art");

class Register{
    constructor(){
        this.render()
        this.bindEvent()
    }
    render(){
        let html = registerView()
        $("#root").html(html);
    }
    bindEvent(){
        $('#login').on('tap', ()=>{
            location.href = 'http://localhost:9000/login.html'
        })
        $('#register').on('tap', ()=>{
            this.request();
        })
    }
    request(){
        this.username = $('#username').val();
        this.password = $('#password').val();
        $.ajax({
            url: 'http://localhost:3000/register',
            data:{
                username:this.username,
                password:this.password
            },
            dataType:'json',
            success:(res)=>{
                console.log(res)
               if (res) {
                   alert('注册成功, 请点登录按钮！')
               }
            }
        })
    }
}
new Register();