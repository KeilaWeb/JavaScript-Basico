//Função que adiciona tarefa
function addTask(){
    const TaskTile = document.querySelector("#task-title").value;//titulo da tarefa
    if(TaskTile){
        //clonar template
        const template = document.querySelector(".template"); 
        const newTask = template.cloneNode(true); //clona o template

        //adiciona título
        newTask.querySelector(".task-title").textContent = TaskTile;

        //remover as classes desnecessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //adiciona tarefa na lista
        const list = document.querySelector("#task-list");
        list.appendChild(newTask);

        //evento remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        });

        //evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function() {
            completeTask(this);
        });

        //limpar texto da seleção
        document.querySelector("#task-title").value = "";
    }
}

//Função de completar tarefa
function completeTask(task) {
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");
}

//Função de remover tarefa
function removeTask(task) {
    task.parentNode.remove(true);
}


//evento de adicionar tarefas ao To Do
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e) {
    e.preventDefault();//o botão fica esperando alguma ação em vez de agir como um formulário
    addTask();
});