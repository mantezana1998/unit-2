var Todo = require('../models/todo');

module.exports = {
    new: newTodo,
    create,
    index,
    delete: deleteTodo
};

function newTodo(req, res) {
    res.render('index');
}

function create(req, res) {
    req.body.done = false;
    Todo.create(req.body);
    res.redirect('/todos') 
}

function index(req, res) {
    res.render('index', {
        todos: Todo.getAll()
    });
}

function deleteTodo(req, res){
    Todo.deleteOne(req.params.id);
    res.redirect('/todos');
}