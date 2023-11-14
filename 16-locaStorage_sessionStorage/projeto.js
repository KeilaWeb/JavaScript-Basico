const nameForm = document.querySelector("#name-form");
const welcomeContainer = document.querySelector("#welcome");
const logoutBtn = document.querySelector("#logout");

//checar se o nome ja esta no localStorage
function checkUser() {
    const userName = localStorage.getItem("name")

    if(userName) {
        nameForm.style.display = "none"; //escondendo o nome da tela
        welcomeContainer.style.display = "block"; //aparece o nome

        const userNameElement = document.querySelector("#username");

        userNameElement.textContent = userName; //faz com que o span seja preenchido, o nome do usuario aparece no welcome

    }else {
        nameForm.style.display = "block"; //se não tiver nome ele mostra o formulario
        welcomeContainer.style.display = "none"; //aparece o nome
    }
}


//fazer o submit salvar na localStorage
nameForm.addEventListener("submit", (e) => { //add evento ao formulario
    e.preventDefault(); 
    const nameInput = document.querySelector("#name");//pegar o name input

    localStorage.setItem("name", nameInput.value); //pega o texto digitado no input e traz o valor como texto, dai coloca na localStorage como setItem

    nameInput.value = "";
    checkUser();
});


logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("name");
    checkUser();

});

//começo da aplicação
checkUser();