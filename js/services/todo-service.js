todo.factory('todoService', function() {

  var _items = [
    {
      text: "true 1",
      dueDate: new Date(),
      completed: true
    },
    {
      text: "true 2",
      dueDate: new Date(),
      completed: true
    },
    {
      text: "false 1",
      dueDate: new Date(),
      completed: false
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

  var processForm = function(isValid) {
    if (isValid) {
      var newItem = {
        text: $scope.todo.text,
        dueDate: $scope.todo.dueDate,
        completed: false
      };
      $scope.items.push(newItem);
      $scope.todo.dueDate = undefined;
      $scope.todo.text = undefined;
    }
  };

  return {
    getAll: getAll,

  };
});
