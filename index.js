import express from "express";
import path from 'path';
import { fileURLToPath } from 'url'
import { dirname } from 'path';
import methodOverride from 'method-override'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = 3000;

var app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
//app.use(methodOverride('X-HTTP-Method-Override'))
app.use(methodOverride('_method'))

app.set('views', './views')
app.set('view engine','ejs')

app.get('/test-ejs', (req,res) => {
    res.render('index' ,{myTitle: "my first Title"})
})


app.get('/test-ejs2', (req,res) => {
    res.render('index2' ,{users : ['Bob', 'John', 'Jane' ]})
})

app.get('/put-page', (req,res) => {
    res.render('put-page' ,{users : ['Bob', 'John', 'Jane' ]})
})

app.get('/',(req,res) => {
    res.send("Hallo BenutzerX");
});

app.post('/', (req,res) => {
    res.sendFile(path.join(__dirname,'hello.html'));
});

app.put('/', (req,res) => {
    res.sendFile(path.join(__dirname,'hello.html'));
});

app.delete('/',(req,res) => {
    res.status(200).json({"good" : "yep"});
});

/*app.listen(PORT,() => {
    console.log('Hello');
})*/

app.listen(
    PORT,()=>console.log(`http://localhost:${PORT}`)
);


