let username = document.location.search;

username = username.substring(1);

//Buscar dados
function buscarUsuario() {
    fetch(`https://fake-github.herokuapp.com/api/search/${username}`)
        .then(function (resultado) {
            resultado.json().then(function (response) {
                console.log(response);
                mostrarDados(response)
            });
        }).catch(function (error) {
            console.log("Error: ", error);
        });
}

function mostrarDados(usuario) {
    //inserir img
    let divIcon = document.createElement('div');
    let imagem = document.createElement('img');
    imagem.src = usuario.avatar_url;
    divIcon.appendChild(imagem);
    document.body.appendChild(divIcon);
    divIcon.className = 'divIcon'; 
    //inserir nome
    let divUsername = document.createElement('div');
    divUsername.innerText = usuario.name;
    document.body.appendChild(divUsername);
    divUsername.className = 'divUser'
    //inserir login
    let divNome = document.createElement('div');
    divNome.innerText = usuario.login;
    document.body.appendChild(divNome);
    divNome.className = 'divNome';
}

//Buscar repositórios
function buscarRepositoriosUsuario() {
    fetch(`https://fake-github.herokuapp.com/api/search/${username}/repos`)
        .then(function (resultado) {
            resultado.json().then(function (repos) {
                console.log(repos);
                repos.forEach(function (e){
                     mostrarRepositorios(e);
                })
            });
        }).catch(function (error) {
            console.log("Error: ", error);
        });
}

function mostrarRepositorios(usuario){
    //inserir repos
    let divzona = document.createElement('div');
    document.body.appendChild(divzona);
    divzona.className= 'divzona';
    let divRepos = document.createElement('div');
    divzona.appendChild(divRepos);
    divRepos.innerText = usuario.name;
    divRepos.className = 'divRepos';
    let divLink = document.createElement('div');
    divzona.appendChild(divLink);
    divLink.innerText = usuario.svn_url;
    divLink.className = 'divLink'
}

buscarUsuario();
buscarRepositoriosUsuario();
mostrarDados();
mostrarRepositorios();