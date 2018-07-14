var mongoose = require("mongoose") ; 

mongoose.set('debug' , true) ;
mongoose.connect("mongodb://todo-api:CSE2008@ds239071.mlab.com:39071/todo-api" ,  { useNewUrlParser: true }) ;

mongoose.Promise = Promise ;

module.exports.Todo = require("./todo") ;