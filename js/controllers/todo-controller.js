todo.controller('TodoController', ['$scope', 'todoService', function($scope, todoService) {

  $scope.items = todoService.getAll();
  $scope.sortingOptions = [
    { text: "None",
      sortValue: ""
    },
    { text: "Completed on Top",
      sortValue: "-completed"
    },
    { text: "Completed on Bottom",
      sortValue: "completed"
    },
    { text: "Due Date Descending",
      sortValue: "-dueDate"
    },
    { text: "Due Date Ascending",
      sortValue: "dueDate"
    }
  ];

  $scope.processForm = function(isValid) {
    if (isValid) {
      todoService.addTodo($scope.todo);
      $scope.todo.dueDate = undefined;
      $scope.todo.text = undefined;
    }
  };

  $scope.deleteTodo = function(todo) {
    todoService.deleteTodo(todo);
  };

  $scope.destroyCompletedTodos = todoService.destroyCompleted;

}]);

