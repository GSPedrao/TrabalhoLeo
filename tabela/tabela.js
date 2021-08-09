var dadosUser = []
var dadosNumero = []
var dadosPagamento = []
var valores = 0 


function salvarUser() {

    let nomeUser = document.getElementById("nomeUser").value;
    let numero = document.getElementById("numero").value;
    let pagamento = document.getElementById("pagamento").value;

    if (nomeUser && numero && pagamento) {
        dadosUser.push(nomeUser);
        dadosNumero.push(numero);
        dadosPagamento.push(pagamento);
        criaLista();
        //Limpa dados do formulario
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
   //console.log(tabela);
}

function excluir(valores) {
    dadosUser.splice((valores - 1), 1);
    dadosNumero.splice((valores - 1), 1);
    dadosPagamento.splice((valores - 1), 1);
    document.getElementById("tabela").deleteRow(valores);
}

function editar(valores) {

    var posicaoE = (valores -1);
    document.getElementById("nomeUser").value = dadosUser[(posicaoE)];
    document.getElementById("numero").value = dadosNumero[(posicaoE)];
    document.getElementById("pagamento").value = dadosPagamento[(posicaoE)];

    //pelo que entendi o splice nao precisa substituir no array, entao em segundo plano ele deleta o arquivo e depois na função salvar ele insere um novo valor no array
    //até pensei em colcoar mais uma função de atualização, mas para o que vc precisa acho que ja serve. 
    dadosUser.splice(posicaoE, 1);
    dadosNumero.splice(posicaoE, 1);
    dadosPagamento.splice(posicaoE, 1);

}
