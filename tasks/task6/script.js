document.addEventListener("DOMContentLoaded",loadTasks);


function addTask(){
    const input = document.getElementById("todo-input");
    const task = input.value.trim();

    if (task === "") return;

    const tasks = getTasks();
    tasks.push (task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
    displayTasks();
}

function deleteTask(index){
    const tasks = getTasks();
    tasks.splice(index, 1);
    localStorage.setItem ("tasks", JSON.stringify(tasks));
    displayTasks();
}

function getTasks() {
let tasks = localStorage.getItem("tasks");
if (tasks) {
    return JSON.parse(tasks);
    } else {
    return [];
    }
}

function displayTasks(){
    const list = document.getElementById("todo-list");
    list.innerHTML = "";

    const tasks =getTasks();
    tasks.forEach((task, index)=> {
    const li = document.createElement("li");
    li.innerHTML = `
    ${task}
    <button onclick="deleteTask(${index})">X</button>
    `;
    list.appendChild(li);
    });
}

function loadTasks() {
    displayTasks();
}
