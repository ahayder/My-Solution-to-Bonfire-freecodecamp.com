function chunk(arr, size) {  
  // Break it up.
  var iter = Math.floor(arr.length / size);
  var out = [];
  for (var i = 0; i < iter; i++) {
    var tmp = [];
    for (var x = 0; x < size; x++) {
      tmp.push(arr[x]);
    }
    arr.splice(0, size);
    out.push(tmp);
  }
  if (arr.length > 0) {
    out.push(arr);
  }
  return out;
}

chunk(['a', 'b', 'c', 'd'], 2);  