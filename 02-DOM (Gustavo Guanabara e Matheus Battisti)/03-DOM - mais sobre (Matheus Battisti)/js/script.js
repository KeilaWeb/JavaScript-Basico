/*//Trocar o texto do h1 pelo texto do h3
var el = document.createElement("h3"); //criando o elemento
el.classList = "testando-classe"; //criando a classe dele
var texto = document.createTextNode("Texto criado no h3"); // criando o texto do novo elemento
el.appendChild(texto); 
console.log(el)

var title =  document.querySelector("#title"); //selecionar o elemento que quer trocar
console.log(title)
var pai = title.parentNode; //seleciona o pai do el
pai.replaceChild(el, title) //variavel que entra, variavel que sai
*/

//Alterando atributos
var title = document.querySelector("#title");
title.setAttribute("class", "testando atributo") //inseri atributo a classe
console.log(title);

//desabilitando o botão
var btn = document.querySelector("#btn");
btn.setAttribute("disabled", "disabled");

//alterar o subtitulo, colocando o id titulo-2
var subtitulo = document.querySelector(".subtitulo");
subtitulo.setAttribute("id", "titulo-2");

//Removendo um atributo
var lista = document.querySelector("#lista"); //pega o id 
lista.removeAttribute("id")
