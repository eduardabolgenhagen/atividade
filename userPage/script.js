let username = document.location.search;

username = username.substring(1);

//Buscar dados
fetch(`https://fake-github2.herokuapp.com/api/search/${username}`)
    .then(function (resultado) {
        resultado.json().then(function (avatar_url, name, login) {
            avatar_url = date.avatar_url;
            console.log(date.avatar_url);

        });
    }).catch(function (error) {
        console.log("Error: ", error);
    });

//Buscar repositórios
fetch(`https://fake-github2.herokuapp.com/api/search/${username}/repos`)
    .then(function (resultado) {
        resultado.json().then(function (repos) {
            console.log(repos);

        });
    }).catch(function (error) {
        console.log("Error: ", error);
    });