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

const todoArrayDisplay = []
function addTodoArrayDisplay(){
    //masukin data todo ke array
    const inputTodoDisplay = document.querySelector('.todo-input-2')
    const inputValue = inputTodoDisplay.value
    todoArrayDisplay.push(inputValue)

    //display seluruh array ke website
    let pDisplay = ""
    const displayTodoElement = document.querySelector('.display-all-todo')
    
    //susun yang mau dimasukin ke dalam element display
    for(let i = 0; i < todoArrayDisplay.length; i++){
        pDisplay = pDisplay + `<p>${todoArrayDisplay[i]}</p>`
    }

    displayTodoElement.innerHTML = pDisplay
}