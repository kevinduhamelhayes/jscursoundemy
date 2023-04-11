const todos = JSON.parse(localStorage.getItem("todos")) || [];
const actualizaTodos = (todos) => {
    const todoStrings = JSON.stringify(todos);
    localStorage.setItem("todos", todoStrings);
}
const render = () => {
    const todolist = document.getElementById("todo-list");
    const todosTemplate = todos.map(t => '<li>' + t + '</li>');
    todolist.innerHTML = todosTemplate.join("");
    const elementos = document.querySelectorAll("#todo-list li")
    elementos.forEach((elemento, i) => {
        elemento.addEventListener ("click", () => {
            elemento.parentNode.removeChild(elemento);
            todos.splice(i, 1);
            actualizaTodos(todos);
            render();
        })
    })
}
window.onload = () => {
    render();
    const form = document.getElementById("todo-form");
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById("todo");
        const todotext = todo.value;
        todo.value = "";
        todos.push(todotext);
        actualizaTodos(todos);
        render();
      
    }
 }

