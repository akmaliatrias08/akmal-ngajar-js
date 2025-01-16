const todoArray = [];
function addTodoArray(){
    //ambil value dari input
    //get element input -> .querySelector()
    const inputTodo = document.querySelector('.todo-input')
    //ambil value input -> element.value
    const inputValue = inputTodo.value

    //kita masukin value nya ke array
    todoArray.push(inputValue)

    console.log(todoArray)
}