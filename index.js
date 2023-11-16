import express from "express";
import path from 'path';
import { fileURLToPath } from 'url'
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


var app = express();


app.get('/',(req,res) => {
    res.send("Hallo BenutzerX");


});


app.post('/', (req,res) => {

    res.sendFile(path.join(__dirname,'hello.html'));
});


app.delete('/',(req,res) => {

    res.status(200).json({"good" : "yep"});
});

app.listen(3000,() => {
    console.log('Hello');

})


