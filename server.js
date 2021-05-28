const express = require('express')
const app = express();


app.use(express.static('./client/build')); 


const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log('server listen on port', port)})