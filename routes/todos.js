var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos')


router.get('/', todosCtrl.index);
router.get('/new', todosCtrl.new);
router.post('/', todosCtrl.create);
router.post('/:id', todosCtrl.delete);


module.exports = router;