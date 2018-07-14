// Require //  

var express = require("express"), 
router = express.Router() , 
db = require("../models")  , 
helpers = require("../helpers/todos") ;


// Routers // 
router.route("/")
.get(helpers.getTodos)
.post(helpers.createTodo)
  
router.route("/:id")
.get(helpers.showTodo)
.put(helpers.UpdateTodo)
.delete(helpers.DeleteTodo)



module.exports = router ;