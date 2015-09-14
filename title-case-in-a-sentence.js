function titleCase(str) {
  var arr = str.toLowerCase().split(" ");
  var var1 = [];
  for(var i = 0; i < arr.length; i++){
    var var2 = arr[i].charAt(0).toUpperCase()+ arr[i].slice(1);
    var1.push(var2);
  }
  var var3 = var1.join(' ');
  return var3;
}

titleCase("I'm a little tea pot");