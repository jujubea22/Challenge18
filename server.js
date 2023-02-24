const express =require('express');
const db =require('./config/connection');
const routes =require('./routes');
const port =process.env.port || 3001

AudioParamMap.use(express.json());
AudioParamMap.use(routes);

db.onc('open', ())=>{
    AudioParamMap.listen(PORT, () =>{
        console.log (' Server on Port ${PORT}!');
    })
}