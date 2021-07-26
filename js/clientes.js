// captando dados do form clientes
let formClientes = document.getElementById('dadoscliente');
formClientes.addEventListener('submit', (e) => {
    e.preventDefault;

    let numcpf = document.getElementById('numcpf').value;
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let nascimento = document.getElementById('nascimento').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let cep = document.getElementById('cep').value;
    let logradouro = document.getElementById('logradouro').value;
    let complemento = document.getElementById('complemento').value;
    let numero = document.getElementById('numero').value;
    let bairro = document.getElementById('bairro').value;
    let municipio = document.getElementById('municipio').value;
    let uf = document.getElementById('uf').value;

    let dados = {
        numcpf, nome, telefone, nascimento, email, senha, cep, logradouro, complemento, numero, bairro, municipio, uf
    }

    let converterDados = JSON.stringify(dados)
    localStorage.setItem('clienteNovo', converterDados)

    let conteudo = document.getElementById('novoCliente')

    let cadastrando = `<p> Adicionando Cliente </p>`
    let cadastrado = ` <p> Concluído com Sucesso </p>`
    conteudo.innerHTML = cadastrando

    setTimeout(() => {
        conteudo.innerHTML = cadastrado
    }, 1000)

})

