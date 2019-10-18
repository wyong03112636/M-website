const express = require('express');

const app = express();

const userdata = []
app.all("*",function (req,res,next) {
    
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");

    next();
});

app.use('/register', (request, response)=>{
    let data = request.query;
    userdata.push(data);
    response.send(JSON.stringify({
        mgs:'success'
    }))
})

app.use('/login', (request, response)=>{
    
    let data = request.query;

    let flag = false;
    userdata.forEach((value, index)=>{
        if(value.username === data.username&&value.password === data.password){
            flag = true;
        } 
    })
    response.send(flag)
})

app.listen(3000)