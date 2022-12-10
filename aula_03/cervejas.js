var cervejas = [{
    'id': 1,
    'nome': 'skol',
    'ibu': 15,
    'lote': '1000'
},
{
    'id': 2,
    'nome': 'spaten',
    'ibu': 20,
    'lote': '1200'
}]

// CRUD
function create(cerveja){
    cervejas.push(cerveja)
    return 'Cadastrado com sucesso!';
};

function read(){
    return cervejas;
};

function read_by_id(id){
    let cerveja = {};
    cervejas.forEach(e => {
        if(e['id']==id){
            cerveja = e;
            return;
        }
    });
    return cerveja;
};

function uptade(cerveja){
    //remover a cerveja antiga
    remove(cerveja['id']);

    cervejas.push(cerveja);
    //alterar
    return 'Alterado com sucesso!';
};

//delete palavra reservada - por isso remove
function remove(id){
    let nova_lista = [];

    cervejas.forEach((e)=>{
        if(e['id']!=id){
            nova_lista.push(e);
        }
        });

    cervejas = nova_lista;
    return 'Removido com sucesso!';
};

module.exports = {
    create,
    read,
    uptade,
    remove,
    read_by_id
};