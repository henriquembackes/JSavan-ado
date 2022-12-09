const express = require('express');
const crud_cervejas = require('./cervejas');

const app = express();

app.get('/', function(req,res){
    res.send("<h1>Curso zzeca</h1>");
});

app.get('/cerveja', function(req,res){
    res.send(crud_cervejas.read());
});

app.post('/cerveja', function(req,res){
    res.send('Cadastrado com sucesso!');
});

app.put('/cerveja', function(req,res){
    res.send('Alterado com sucesso!');
});

app.delete('/cerveja', function(req,res){
    res.send('Deletado com sucesso!');
});

app.listen(3000);