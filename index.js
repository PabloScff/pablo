 const express = require('express');
 const server = express();
 const sneakrFild = require('./src/data/sneakrFild.json');

 server.get('/usuario',(req,res)=>{
    return res.json(sneakrFild)
 });

 server.listen(3000,() => {
    console.log('servidor esta funcionando...')
 });