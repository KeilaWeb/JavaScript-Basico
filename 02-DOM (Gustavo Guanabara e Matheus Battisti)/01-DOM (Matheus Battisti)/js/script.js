//Acessando DOM
//tag
var titulo = document.getElementsByTagName('h1')[0];
console.log(titulo);
var lis = document.getElementsByName('li');
console.log(lis);
//id
var paragrafo = document.getElementById('paragrafo');
console.log(paragrafo);
//class
var itensLista = document.getElementsByClassName('item');
console.log(itensLista);

////////////////////////
//queryAll (9)para pegar varios elementos)
var itensQuery = document.querySelectorAll('#lista2 li');
console.log(itensQuery);
//querySelector (para pegar apenas um elemento)
var lista = document.querySelector('#lista');
console.log(lista);

///////////////////////
//Selecionar elemento por innerHTML e textContent
var title = document.querySelector('#title');
console.log(title);

//innerHTML
title.innerHTML = "Testando o texto alterado";
//textContent -> mais utilizdo, recomendado, performático
var subtitulo = document.querySelector('.subtitulo');// pega assim
console.log(subtitulo)
subtitulo.textContent = "Testando o textContent";//ou assim

///////////////////////////
//Criando novo elemento atraves direto no JS e inserindo ele no body
var novoParagrafo = document.createElement("p");
console.log(novoParagrafo);
var texto = document.createTextNode("Criei um novo parágrado pelo JS")
novoParagrafo.appendChild(texto)
console.log(novoParagrafo)
var body = document.querySelector('body');
console.log(body);
body.appendChild(novoParagrafo)

/////////////////////////
//Removendo elemento filho
var container = document.querySelector("#container"); //seleciona o elemento pai
var p = document.querySelector("#container p"); //seleciona o filho
container.removeChild(p);

//////////////////////
//Remover elemento
var subtitulo = document.querySelector(".subtitulo");
subtitulo.remove();

//////////////////////
//Criar elemento
var elem = document.createElement("div") //criando o elemento div
elem.classList = "div-criada"; //criando a class
console.log(elem);
var container = document.querySelector("#container"); //inseirindo o elemento na pagina
container.appendChild(elem);

//InserBefore - insere antes
var elem2 = document.createElement("div"); //criou o elemento
elem2.classList = "div-before"; //inseriu uma classe para o elemento
elem3 = document.querySelector("#container .div-criada");
console.log(elem3);
container.insertBefore(elem2, elem3)