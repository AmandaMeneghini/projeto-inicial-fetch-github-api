const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user) {
        this.userProfile.innerHTML = `  <div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                                            <div class="data">
                                                <h1>${user.name ?? 'Não possuí nome cadastrado 😢'}</h1>
                                                <p>${user.bio ?? 'Não possuí bio cadastrada 😢'}</p>
                                            </div>
                                        </div>`


        let repositoriesItens = "";
        user.repositories.forEach(repo => {
            repositoriesItens += `<li><a target="_blank" href="${repo.html_url}">${repo.name}</a></li>`
        });

        if(user.repositories.length > 0){
            document.querySelector(".profile-data").innerHTML +=    `<div class="repositories section">
                                                                        <h2>Repositórios</h2>
                                                                        <ul>${repositoriesItens}</ul>
                                                                    <div>`;
        } 



    }
}

export { screen }