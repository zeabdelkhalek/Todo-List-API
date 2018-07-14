var db = require("../models") ;
exports.getTodos = function(req,res) { 
    db.Todo.find()
    .then(function(todos) { 
        res.json(todos) ;
    })
    .catch(function(err) { 
        res.send(err) ;
    })

    }


exports.createTodo = function(req,res){ 
    db.Todo.create(req.body)
    .then(
        function (newTodo) {
            res.status(201).json(newTodo) ; 
            newTodo.save() ;
            
        }
    )
    .catch(
        function(err){ 
            res.send(err) ;
        }
    )
}


exports.showTodo = function(req,res) { 
    db.Todo.findById(req.params.id)
    .then(function(FoundTodo) { 
        res.json(FoundTodo) ;
    })
    .catch(function(err) { 
        res.send(err) ;
    })

    } 

exports.UpdateTodo = function(req,res) { 
    db.Todo.findOneAndUpdate({ 
        _id : req.params.id 
    } , req.body , {new : true } )
    .then(function(UpdatedTodo) { 
        res.json(UpdatedTodo) ;
    })
    .catch(function(err) { 
        res.send(err) ;
    })

    } 



exports.DeleteTodo =   function(req,res) { 
    db.Todo.findByIdAndRemove(req.params.id)
    .then(function() { 
        res.json({ message : "We delete it ! "})
    })
    .catch(function(err) { 
        res.send(err) ;
    })

    }





module.exports = exports ;

