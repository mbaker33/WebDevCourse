window.setTimeout(function() {
    var todos = [];

    var input = prompt("What would you like to do?");

    while (input !== "quit"){
        //handle input
        if (input === "list") {
            console.log(todos);
        }
        
        else if(input === "new") {
            var newTodo = prompt("Enter new todo");
            todos.push(newTodo);
            console.log("todos");
        }
        //ask again for new input
        var input = prompt("What would you like to do?");
    }

    console.log("OK, you quit the app...");    
}, 500);

