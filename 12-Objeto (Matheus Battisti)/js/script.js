console.log(this) //Objeto window

let pessoa = { //criando o objeto pessoa
    nome: "José",
    idade: 29,
    falar: function(){ //função 
        console.log("Olá tudo bem?");
    },
    soma: function(a, b){
        return a + b;
    },
    dizerNome: function(){
        console.log("O meu nome dele é " + this.nome);
    },
    aniversario: function() {
        this.idade += 1;
    },
    saudacao: function(){
        return 'Sr. ' + this.nome;
    }
};

console.log("Nome: " + pessoa.nome + " Idade: " + pessoa.idade + " anos");
pessoa.falar();

var soma = pessoa.soma(2, 3);
console.log(soma);

pessoa.dizerNome();

console.log(pessoa.idade);
pessoa.aniversario();
console.log(pessoa.idade)

var sdc = pessoa.saudacao();
console.log("Olá, " + sdc)