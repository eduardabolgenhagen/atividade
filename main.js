//title
let header = document.createElement('header');
let title = document.createElement('h1');
document.body.appendChild(header);
header.appendChild(title);
title.innerText = 'ATIVIDADE JAVASCRIPT';

//main
let main = document.createElement('main');
document.body.appendChild(main);

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

let tablePrincipal = document.createElement('div');
tablePrincipal.className = 'tablePrincipal';
main.appendChild(tablePrincipal);

listPerson.forEach(function(element) {
    let divNames = document.createElement('div');
    tablePrincipal.appendChild(divNames);
    divNames.className = 'divNames';

    let colunaNomes = document.createElement('div');
    colunaNomes.className = 'colunaNomes';
    divNames.appendChild(colunaNomes);
    colunaNomes.innerText = element.name;

    let colunaUsers = document.createElement('div');
    colunaUsers.className = 'colunaUsers';
    divNames.appendChild(colunaUsers);
    colunaUsers.innerText = element.username;

    let buttons = document.createElement('button');
    buttons.innerText = 'Vizualizar';
    divNames.appendChild(buttons);

    buttons.onclick = function(){
        location.href = `./userPage/index.html?${element.username}`;
    }
})