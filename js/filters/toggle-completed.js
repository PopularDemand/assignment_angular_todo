todo.filter('toggleCompleted', function() {
  return function(items, hide) {

    // if hide is false, return all items
    if (!hide) { return items; }

    var filteredCollection = [];

    // filter out completed items
    for (var i = 0; i < items.length; i++) {
      if (!items[i].completed) {
        filteredCollection.push(items[i]);
      }
    }

    return filteredCollection;
  };
});
