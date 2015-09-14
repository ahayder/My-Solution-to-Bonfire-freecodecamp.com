function factorialize(num) {
  var sum = 1;
  for(var i = 2; i <= num ; i++){
   sum *= i;
  }
  num = sum;
  return num;
}

factorialize(5);