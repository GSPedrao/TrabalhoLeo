var dadosUser = []
var dadosNumero = []
var dadosPagamento = []
var valores 

function salvarUser() {
    let nomeUser = document.getElementById("nomeUser").value;
    let numero = document.getElementById("numero").value;
    let pagamento = document.getElementById("pagamento").value;


    if (nomeUser && numero && pagamento) {
        dadosUser.push(nomeUser);
        dadosNumero.push(numero);
        dadosPagamento.push(pagamento);
        criaLista();
        document.getElementById("nomeUser").value = "";
        document.getElementById("numero").value = "";
        document.getElementById("pagamento").value = "";
    } else {
        alert("preencha os campos obrigatórios");
    }
}

function criaLista() {
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome</th><th>Número</th><th>Forma de Pagamento</th></tr>";
    for (valores = 0; valores <= (dadosUser.length - 1); valores++) {
        tabela += "<tr><td>" + dadosUser[valores] + "</td><td>" + dadosNumero[valores] + "</td><td>" + dadosPagamento[valores] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button> <button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById("tabela").innerHTML = tabela;
    }
}

function excluir(valores) {
    dadosUser.splice((valores - 1), 1);
    dadosNumero.splice((valores - 1), 1);
    dadosPagamento.splice((valores - 1), 1);
    document.getElementById("tabela").deleteRow(valores);
}

function editar(valores) {
    document.getElementById("nomeUser").value = dadosUser[(valores - 1)];
    document.getElementById("numero").value = dadosNumero[(valores - 1)];
    document.getElementById("pagamento").value = dadosPagamento[(valores - 1)];
    dadosUser.splice(dadosUser[(valores - 1)], 1);
    dadosNumero.splice(dadosNumero[valores - 1], 1);
    dadosPagamento.splice(dadosPagamento[valores - 1], 1);
}