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
    }
  };

  // $scope.item = {
  //   text: "Get groceries from the store",
  //   dueDate: new Date(),
  //   completed: false
  // };
}]);
