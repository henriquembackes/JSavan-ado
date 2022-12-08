function nome(nome){
    return `Bem vindo, ${nome}`;
}

function nome_completo(nome, sobrenome){
    return `Olá ${nome} ${sobrenome}`;
}

function div(n1, n2){
    return n1 % n2;
}

module.exports = {nome, nome_completo, div}