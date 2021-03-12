const express = require('express');
const app=express();
const port=3000;
const axios=require('axios');

app.get('/', function(req,res){
        res.send("Enter the url:'http://134.209.64.226:3000/say?keyword=' to go to aws lambda");
})

app.get('/say',async (req,res)=>{
    if(req.query && req.query.keyword) {
        const key = req.query.keyword
        const url="https://39zs0nmu90.execute-api.us-east-1.amazonaws.com/hello/say?keyword=" + key
        await axios.get(url)
        .then(function(result){
            res.send(result.data)
        })
        .catch(function(error) {
            res.send(error)
        })
    }
    else {
        res.send("Keyword parameter is missing");
    }
})

app.listen(port,()=>{
        console.log(`Example app listening at http://localhost:${port}`)
})

