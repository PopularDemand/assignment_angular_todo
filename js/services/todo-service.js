todo.factory('todoService', function() {

  var _items = [
    {
      text: "true 1",
      dueDate: new Date("July. 12, 2005"),
      completed: true
    },
    {
      text: "false 1",
      dueDate: new Date("Dec. 2, 2011"),
      completed: false
    },
    {
      text: "true 2",
      dueDate: new Date("Jan. 1, 2001"),
      completed: true
    },
    {
      text: "false 2",
      dueDate: new Date(),
      completed: false
    }
  ];

  var getAll = function() {
    return _items;
    // Phil said return a duplicate of the _items array?
  };

  var addTodo = function(todo) {
    var newItem = {
      text: todo.text,
      dueDate: todo.dueDate,
      completed: false
    };
    _items.push(newItem);
  };

  var deleteTodo = function(todo) {
    var index = _items.indexOf(todo);
    if (index !== -1) {
      _items.splice(index, 1);
    }
  }

  var destroyCompleted = function(){
    for(var i = _items.length - 1; i >= 0; i--) {
      if (_items[i].completed === true) {
        _items.splice(i, 1);
      }
    }
  }

  return {
    getAll: getAll,
    addTodo: addTodo,
    deleteTodo: deleteTodo,
    destroyCompleted: destroyCompleted
  };
});
