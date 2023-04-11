const todos = [];


window.onload = () => {
    const form = document.getElementById("todo-form");
    form.onsubmit = (event) => {
        event.preventDefault();
        const todo = document.getElementById("todo");
        const todotext = todo.value;
        todo.value = "";
        todos.push(todotext);
        const todolist = document.getElementById("todo-list");
        todolist.innerHTML = "";
        for (let i = 0; i < todos.length; i++) {
            const todo = todos[i];
            const li = document.createElement("li");
            li.innerText = todo;
            const ul = document.getElementById("todos");
            ul.appendChild(li);
        }
    }
}
