toDo.controller('ToDoController', ['$scope', function($scope) {

  $scope.items = [
    {
      text: "Get groceries from the store",
      dueDate: new Date(),
      completed: false
    },
    {
      text: "Get groceries from the store",
      dueDate: new Date(),
      completed: false
    },
    {
      text: "Get groceries from the store",
      dueDate: new Date(),
      completed: false
    },
    {
      text: "Get groceries from the store",
      dueDate: new Date(),
      completed: false
    }
  ];

  $scope.processForm = function(isValid) {
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

  $scope.toggleCompletion = function(todo) {
    todo.complete = todo.complete ? false : true
  };

  $scope.deleteTodo = function(todo) {
    var index = $scope.items.indexOf(todo);
    if (index !== -1) {
      $scope.items.splice(index, 1);
    }
  };

  $scope.destroyCompletedTodos = function() {
    console.log('in destory completed')
    for(var i = $scope.items.length; i >= 0; i--) {
      if ($scope.items[i].completed === true) {
        $scope.items.splice(i, 1);
      }
    }
  }

  // $scope.item = {
  //   text: "Get groceries from the store",
  //   dueDate: new Date(),
  //   completed: false
  // };
}]);
