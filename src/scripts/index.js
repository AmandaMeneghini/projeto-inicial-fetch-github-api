    document.getElementById("btn-search").addEventListener('click', () => {
        const userName = document.getElementById("input-search").value
        getUserProfile(userName);
    })

    async function user(userName){
        const url = `https://api.github.com/users/${userName}`
        const response = await fetch(url);
        return await response.json();
    }

    function getUserProfile(userName){
        user(userName).then(userData => {
            let userInfo = `<img src="${userData.avatar_url}" alt="Foto do perfil do usuário"/>
                            <div class="data">
                                <h1>${userData.name ?? 'Não possuí nome cadastrado 😢'}</h1>
                                <p>${userData.bio ?? 'Não possuí bio cadastrada 😢'}</p>
                            </div>`

            document.querySelector(".profile-data").innerHTML = userInfo;
        })
        
    }
