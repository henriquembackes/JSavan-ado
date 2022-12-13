const { json } = require('body-parser');
const express = require('express');
const { read } = require('fs');
const cervejas = require('./cervejas');
const cors = require('cors');
const app = express();

app.use(cors({
    origin:'*'
}));
app.use(express.json());

app.get('/', function(req,res){
    res.send("<h1>Curso zzeca</h1>");
});

app.get('/cerveja', function(req,res){
    res.send(cervejas.read());
});

app.get('/cerveja/:id', function(req,res){
    res.send(cervejas.read_by_id(req.params.id));
});

app.post('/cerveja', function(req,res){
    let cerveja = req.body;
    res.send(cervejas.create(cerveja));
});

app.put('/cerveja/:id', function(req,res){
    let id_rota = req.params.id;
    let id_body = req.body.id;

    if(id_rota == id_body){
        let cerveja = req.body
        res.send(cervejas.uptade(cerveja));
    }else{
        res.statusCode = 400;
        res.send('Dados inválidos!');
    }

});

app.delete('/cerveja/:id', function(req,res){
    let id = req.params.id;
    res.send(cervejas.remove(id));
});

app.listen(3000);