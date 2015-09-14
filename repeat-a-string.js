function repeat(str, num) {
  var var3 = "";
  if(num < 0){
    return var3;
  }
  else{
    for(var i = 1; i <= num; i++){
    var var2 = str.repeat(i);
      }
      return var2;
    }
  }
  

repeat('abc', 3);