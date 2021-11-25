//title
let header = document.createElement('header');
let title = document.createElement('h1');
document.body.appendChild(header);
header.appendChild(title);
title.innerText = 'ATIVIDADE JAVASCRIPT';

//criar lista
let listPerson = [
    {name: 'Bruna Alves Mafra' , username : 'BMafra'},
    {name: 'Bruno Henrique Verbinnen de Carvalho' , username : 'brunohvc'},
    {name: 'Camilly de Souza Pessotti' , username : 'camillyPessotti'},
    {name: 'Camilly Vitoria da Rocha Goltz' , username : 'VitoriaCamilly'},
    {name: 'Diego Planinscheck' , username : 'frst157'},
    {name: 'Eduarda Bolgenhagen De Campos' , username : 'eduardabolgenhagen'},
    {name: 'Ester Girelli' , username : 'Esterzinha12'},
    {name: 'Felipe Mielke Vieira' , username : 'FelipeMielkeVieira'},
    {name: 'Gustavo Rebelatto Zapella' , username : 'rebelattogustavo'},
    {name: 'Henrique Cole Fernandes' , username : 'HenriqueCole'},
    {name: 'João Henrique Meireles da Silva' , username : 'nihilth'},
    {name: 'Kenzo Hideaky Ferreira Sato' , username : 'Kenzohfs'},
    {name: 'Leonardo Giuseppe de Souza Rafaelli' , username : 'LeonardoRafaelli'},
    {name: 'Leonardo Heitor Poglia' , username : 'leopoglia'},
    {name: 'Matheus Franzener Hohmann' , username : 'MatheusFranzener'},
    {name: 'Otavio Augusto dos Santos' , username : 'SantOtavio'},
    {name: 'Otavio Matheus Neves' , username : 'otavionvs'},
    {name: 'Thiago Marins Braga' , username : 'ThiagoBrag'},
    {name: 'Vinícius Bonatti Benner' , username : 'viniciusz1'},
    {name: 'Vytor Augusto Rosa' , username : 'K43RU'}
];

//main
let main = document.createElement('main');
document.body.appendChild(main);

//criar tabela
function createTabela() {let tabela = document.createElement('table');
main.appendChild(tabela);
let linhaTabela = document.createElement('tr');
let tituloNome = document.createElement('th');
let tituloGIT = document.createElement('th');
let tituloBotao = document.createElement('th');

//titulos da tabela
tituloNome.innerText='Nome Alunos';
tituloGIT.innerText='GitHub';
tituloBotao.innerText='Acessar';
linhaTabela.appendChild(tituloNome);
linhaTabela.appendChild(tituloGIT);
linhaTabela.appendChild(tituloBotao);
tabela.appendChild(linhaTabela);

listPerson.forEach(function (element) {
    console.log('element:', element);
    const rowTable = getPersonTableRow(
        element.name,
        element.username);

    tabela.appendChild(rowTable);
})

}

createTabela();

function getPersonTableRow(name, username) {
    const row = document.createElement('tr');
    const columnName = document.createElement('td');
    const columnUsername = document.createElement('td');
    let button = document.createElement('button');

    columnName.innerText = name;
    columnUsername.innerText = username;
    button.innerText = 'Acessar';

    row.appendChild(columnName);
    row.appendChild(columnUsername);
    row.appendChild(button);

    button.onclick = function(){
        console.log('hello')
    }
    return row;
}