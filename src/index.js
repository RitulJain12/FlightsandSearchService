const express=require('express');
const {PORT}=require('./config/server-config')
const setupAndStartServer=async()=>{
    const app=express();
    app.listen(PORT,()=>{
        console.log(`Server Started at ${PORT}`);
    })
}


setupAndStartServer(); 