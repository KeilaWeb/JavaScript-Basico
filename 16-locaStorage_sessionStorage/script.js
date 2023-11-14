//LOCALSTORAGE
// Inserir dado
localStorage.setItem("name", "Keila");

// Resgatar item
const name = localStorage.getItem("name");
console.log(name);

/*//Resgatando item que não existe
const lastName = localStorage.getItem("lastName")
console.log(lastName);
if(!lastName) {
    console.log("Sem sobrenome")
}

// Remover item do localStorage
localStorage.removeItem("name");

// Limpar toodos os itens
localStorage.setItem("a", 1);
localStorage.setItem("b", 2);
//console.log(typeof localStorage.getItem("a")); //dado vira string
localStorage.clear();


//Salvar objeto
const pessoa = {
    nome: "Adam",
    idade: 13,
    Atividade: "Estudante",
};
localStorage.setItem("pessoa", JSON.stringify(pessoa));
const getPessoa = localStorage.getItem("pessoa"); //objeto é um texto
console.log(getPessoa);
const objetoPessoa = JSON.parse(getPessoa);
console.log(typeof objetoPessoa);
console.log(objetoPessoa);
console.log(objetoPessoa.nome);



//SESSIONSTORAAGE
//Inserindo dado
sessionStorage.setItem("number", 123) // ao reiniciar o navegador perder dados

//Resgatar item 
const n = sessionStorage.getItem("number");
console.log(n);

// Remover e Limpar
sessionStorage.removeItem("number");
sessionStorage.clear();
*/
