let todos = []
let input = document.querySelector('#inputField')
let todoList = document.querySelector('.todos')
let element

input.value = ""

if (todos.length < 1) {
    console.log('tom lista')
}

// Fyller på DOMen med element från todos arrayen
function updateTodos(todos) {
    console.log(todos)
    for (let i = 0; i < todos.length; i++) {
        todoList.appendChild(todos[i])
    }
}

// Sparar ett li element i todos arrayen
// Skickar sedan todos till funktionen updateTodos
function save() {
    element = document.createElement('li')
    input.classList.remove('error')
    element.innerText = input.value
    todos.push(element)
    updateTodos(todos)

    // Om något gick fel
    if (!input.value) {
        input.classList.add('error')
    }
    input.value = ""
}
