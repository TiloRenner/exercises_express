import express from "express";

var app = express();


app.get('/',(req,res) => {
    res.send("Hallo Benutzer");


} )

app.listen(3000,() => {
    console.log('Hello');

})
