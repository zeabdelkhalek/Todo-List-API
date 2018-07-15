$(document).ready(function() { 
    $.getJSON("/api/todos")
    .then(addTodos)

    $("#todoInput").keypress(function(event) { 
        if(event.which == 13) {
            console.log("you hdie enter") ;
            var usrInput = $("#todoInput").val() ;
            $.post("/api/todos" , { name : usrInput } )
             .then(function(todo){ 
                 var newTodo = '<li class="task">' + todo.name + '<span> X </span>  </li>'; 
                 newTodo.data('id' , todo._id) ;
                 newTodo.data('completed' , todo.completed) ;

                    if(todo.completed) { 
                     newTodo.addClass("done") ;
                 }
                 $('.list').append(newTodo) ;
                 $("#todoInput").val("");
             })
             .catch(function(err){
                 console.log(err)
             }
            )
        }
    })


    $('.list').on('click' ,'li' , function(evet){
        $(this).toggleClass("done");
        updateTodo($(this));
    })

    $('.list').on('click' ,'span' , function(evet){
        event.stopPropagation();
        removeTodo($(this).parent());
    })


})


function addTodos (todos) {
    todos.forEach(function(todo) { 
        var newTodo = $('<li class="task" >' + todo.name + '<span> X </span> </li>') ; 
        newTodo.data('id' , todo._id) ;
        newTodo.data('completed' , todo.completed) ;

        if(todo.completed) { 
            newTodo.addClass("done") ;
        }
        $('.list').append(newTodo)
    })
}


function removeTodo (todo) {
    var clickedID = todo.data('id');
    var  URL = '/api/todos/' + clickedID ;

$.ajax({
    method : 'DELETE' , 
    url : URL
})
.then(function(data) { 
    todo.remove();
})
}

function updateTodo (todo) { 
    var  URL = '/api/todos/' + todo.data('id');
    var updateData = { completed : !(todo.data('completed') )}
    $.ajax({
        method : 'PUT' , 
        url : URL , 
        data : updateData
    })

}