const url = 'http://localhost:3000/cerveja';


function getCervejas(){
    fetch(url)
    //.then - quando o resutado vier com sucessp, faça algo
    .then(resultado=>resultado.json())
    .then(dados=>{
        const tbody = document.getElementById('tbody-cervejas');

        dados.forEach(e => {  
            tbody.innerHTML += `<tr>
                                    <td>${e.id}</td>
                                    <td>${e.nome}</td>
                                    <td>${e.ibu}</td>
                                    <td>${e.lote}</td>
                               </tr>`;
            
        });
        
        
    })
    //.catch - quando o resultado vier com erro, faça algo
    .catch(erro=>console.error(erro));
}

document.getElementById('form-bebidas').addEventListener('submit', cadastrar);

function cadastrar(event){
    event.preventDefault();
    const id = document.getElementById('id').value;
    const nome = document.getElementById('nome').value;
    const ibu = document.getElementById('ibu').value;
    const lote = document.getElementById('lote').value;

    const cerveja = {
        'id': id,
        'nome': nome,
        'ibu': ibu,
        'lote': lote
    };
    
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(cerveja),
        headers:{
            "Content-type": "application/json"
        }
    })
    .then(resultado=>resultado.text())
    .then(data=>alert(data))
    .catch(erro=>console.error(erro));
}