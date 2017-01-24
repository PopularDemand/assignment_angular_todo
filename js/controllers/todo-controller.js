todo.controller('TodoController', ['$scope', 'todoService', function($scope, todoService) {

  $scope.items = todoService.getAll();

  $scope.processForm = function(isValid) {
    todoService.processForm(isValid);
  };

  $scope.deleteTodo = function(todo) {
    var index = $scope.items.indexOf(todo);
    if (index !== -1) {
      $scope.items.splice(index, 1);
    }
  };

  $scope.destroyCompletedTodos = function() {
    for(var i = $scope.items.length - 1; i >= 0; i--) {
      if ($scope.items[i].completed === true) {
        $scope.items.splice(i, 1);
      }
    }
  };

}]);
