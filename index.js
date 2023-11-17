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
app.use(methodOverride('_methodx'))
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

app.post('/showPost',(req,res) => {
    res.send(req.body.firstName);
    console.log("PostNameResult:", req.body);
});

app.get('/showGet',(req,res) => {

    res.send([req.query.firstName , req.query.lastName]);
    console.log("GetNameResult:" ,req.query);
});

app.get('/number/:id',(req,res) => {
    res.send(`The number is ${req.params.id}`);
    console.log("Ex9 - Params")
});

app.post('/', (req,res) => {
    res.sendFile(path.join(__dirname,'hello2.html'));
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


