document.getElementById("btn-search").addEventListener('click', () => {
    const userName = document.getElementById("input-search").value
    getUserProfile(userName);
})

document.getElementById("input-search").addEventListener('keyup', (e) => {
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const isEnterKeyPressed = key === 13;

    if (isEnterKeyPressed) {
        getUserProfile(userName);
    }
})

async function user(userName) {
    const url = `https://api.github.com/users/${userName}`
    const response = await fetch(url);
    return await response.json();
}

async function repos(userName) {
    const url = `https://api.github.com/users/${userName}/repos?per_page=10`
    const response = await fetch(url);
    return await response.json();
}

function getUserProfile(userName) {
    
    repos(userName).then(reposData => {
        console.log(reposData);
    })
    
    user(userName).then(userData => {
        let userInfo = `<div class="info">
                            <img src="${userData.avatar_url}" alt="Foto do perfil do usuário"/>
                            <div class="data">
                                <h1>${userData.name ?? 'Não possuí nome cadastrado 😢'}</h1>
                                <p>${userData.bio ?? 'Não possuí bio cadastrada 😢'}</p>
                            </div>
                        </div>`
        
        document.querySelector(".profile-data").innerHTML = userInfo;
        
        getUserRepositories(userName)
    })
    
}

function getUserRepositories(userName) {
    repos(userName).then(reposData => {
        let repositoriesItens = "";
        console.log(reposData);
        reposData.forEach(repo => {
            repositoriesItens += `<li><a target="_blank" href="${repo.html_url}">${repo.name}</a></li>`
        });

        document.querySelector(".profile-data").innerHTML +=    `<div class="repositories section">
                                                                    <h2>Repositórios</h2>
                                                                    <ul>${repositoriesItens}</ul>
                                                                <div>`;

    })
}
