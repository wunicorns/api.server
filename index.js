const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req,res)=>res.send('test ok!'));

app.listen(port, ()=>{
    console.log(`server running ${port}`);
});