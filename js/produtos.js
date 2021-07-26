// captando dados do form dadosproduto
let formProdutos = document.getElementById('dadosproduto');
formProdutos.addEventListener('submit', (e) => {
    e.preventDefault;
    let referencia = document.getElementById('referencia').value;
    let idProduto = document.getElementById('idProduto').value;
    let descricao = document.getElementById('descricao').value;
    let fabricante = document.getElementById('fabricante').value;

    let dados = {
        referencia, idProduto, descricao, fabricante
    }

    let converterDados = JSON.stringify(dados)
    localStorage.setItem('produtoNovo', converterDados)

    let conteudo = document.getElementById('novoItem')

    let cadastrando = `<p> Adicionando Produto </p>`
    let cadastrado = `<p> Concluído com Sucesso </p>`
    conteudo.innerHTML = cadastrando

    setTimeout(() => {
        conteudo.innerHTML = cadastrado
    }, 1000)
})
