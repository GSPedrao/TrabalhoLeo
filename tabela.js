var dadosLista = [];

function salvarUser() {
let nomeUser = document.getElementById("nomeUser").value;


    if(nomeUser && numero && pagamento){
    dadosLista.push(nomeUser);
    dadosLista.push(numero);
    dadosLista.push(pagamento);
    criaLista();
    document.getElementById("nomeUser").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("pagamento").value = "";
    } else {
        alert("Usuário favor preencher o campo nome");
    }
}

function criaLista() {
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome</th></tr>";
    for(let i = 0; i <= (dadosLista.length -1); i++) {
        tabela += "<tr><td><th><th>" + dadosLista[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button> <button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById("tabela").innerHTML = tabela;
    }
}

function excluir(i) {
    dadosLista.splice((i -1), 1);
    document.getElementById("tabela").deleteRow(i);
}
function editar(i) {
    document.getElementById("nomeUser").value = dadosLista[(i -1)];
    dadosLista.splice(dadosLista[(i -1)], 1);
}