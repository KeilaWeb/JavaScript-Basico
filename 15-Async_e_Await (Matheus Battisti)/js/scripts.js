/*
//SINTAXE
function primeiraFuncao() {
    return new Promise((resolve) => { //função que vai esperar por alguma resposta
        setTimeout(() => { //(=> arrow function)
            console.log("Esperou isso aqui");
            resolve();
        }, 1000);
    })
}

async function segundaFuncao(){ //função que vai utilizar a função acima
    console.log('Iniciou')

    await primeiraFuncao()

    console.log("Terminou")
}

segundaFuncao()
*/

// prático
function getUser(id) {
    return fetch(`https://reqres.in/api/users?id=${id}`)
        .then((data) => data.json())
        .catch((err) => console.log(err))
}

async function showUserName(id) {
    try {
        const user = await getUser(id)

        console.log(`O nome do usuário é: ${user.data.first_name}`)

    }catch(err) {
        console.log(`Erro: ${err}`)
    }
    const user = await getUser(id)    
}

showUserName(3)