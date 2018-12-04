var todos = [];
window.setTimeout(function() {
    var input = prompt("What would you like to do?");

    while (input !== "quit"){
        //handle input
        if (input === "list") {
            listToDos();
        }
        
        else if(input === "new") {
            newToDo();
        }

        else if(input ==="delete") {
            deleteToDo();
            
        }

        //ask again for new input
        var input = prompt("What would you like to do?");
    }

    console.log("OK, you quit the app...");    
}, 500);

function listToDos() {
    console.log("Here is a list of your ToDos");
    console.log("");
    console.log("********");
    todos.forEach(function listTodos(todo,index) {
        console.log(index + " - " + todo);
    })
    console.log("********"); 
}

function newToDo() {
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("ToDo Added");
}

function deleteToDo() {
    var deleteTodo = prompt("Enter the index to delete.");
    todos.splice(deleteTodo, 1);
    console.log("ToDo deleted");
}