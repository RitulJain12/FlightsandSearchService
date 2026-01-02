const express=require('express');
const {PORT}=require('./config/server-config');
const bodyParser = require('body-parser');
const setupAndStartServer=async()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT,()=>{
        console.log(`Server Started at ${PORT}`);
    })
}


setupAndStartServer(); 