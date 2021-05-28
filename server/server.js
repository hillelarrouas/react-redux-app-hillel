const express = require('express')
const path =require('path')
const app = express();
const mysql = require('mysql')


const con = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"Shirel2580"

    
})


con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("use test", (err, result, fields) => {
        if (err) throw err;
        console.log('Using test');

    });
});



app.use(express.static(path.join(__dirname,'..', 'client/build')));



app.get('/get_joke',(req, res)=>{
    res.send({joke:"ffff"})
})

const port = process.env.PORT || 4000;
app.listen(port, ()=>{console.log('server listen on port', port)})