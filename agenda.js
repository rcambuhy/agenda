const form = document.getElementById('form-contact');
const contatos = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    handleSubmit(e);
});
//Chamando as funções que serão executadas sempre que o submit for acionado//

function adicionaLinha() {
    const inputContact = document.getElementById('contact-add');
    const inputNumber = document.getElementById('number-contact');

    if (contatos.includes(inputContact.value)) {
        document.querySelector('.failure-message').style.display = 'block';

    } else {

        contatos.push(inputContact.value);

        let linha = '<tr>';
        //indica que o campo receberá uma string//
        linha += `<td> ${inputContact.value}</td>`
        linha += `<td> ${inputNumber.value}</td>`
        linha += `</tr>`;
    
        linhas += linha
    }

    inputContact.value = '';
inputNumber.value = '';
//Faz a função reset dos inputs//
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function handleSubmit(e) {
    //handleSubmit é a função que define o comportamento e o addEventListener associa uma função a determinado elemento//
    e.preventDefault();
    const failureMessage = document.querySelector('.failure-message');

    setTimeout(() => {
        //setTimeout é o que define quanto tempo o meu aviso ficará na tela//
        failureMessage.style.display = 'none';
    }, 5000); //5000 é igual a 5 segundos//
}