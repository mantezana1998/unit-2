const todos = [
    // {id: 209400, todo: 'Get a fresh fade', done: false}
]

module.exports = {
    getAll,
    getOne,
    create: createTodo,
    deleteOne
};

function deleteOne(id) {
    const idx = todos.findIndex(todo => todo.id === parseInt(id));
    todos.splice(idx, 1);
}

function createTodo(todo) {
    todo.id = Date.now() % 1000000;
    todos.done = false;
    todos.push(todo);
}

function getOne(id) {
    return todos.find(todo => todo.id === parseInt(id));
}

function getAll(){
    return todos;
}