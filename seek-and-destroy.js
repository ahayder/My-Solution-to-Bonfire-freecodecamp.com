function destroyer(arr) {
  var args = Array.prototype.slice.apply(arguments).slice(1);
  for (var i in arr) {
      for (var j in args) {
          if (arr[i] === args[j]) {
              arr.splice(i, 1);
          }
      }
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);