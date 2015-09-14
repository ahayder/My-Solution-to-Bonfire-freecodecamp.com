function mutation(arr) {  
  var ret = true;
  var str1 = arr[0].toLowerCase().split('').sort();
  var str2 = arr[1].toLowerCase().split('').sort();
  var biggest = str1.length > str2.length ? str1 : str2;
  var smallest = str1.length > str2.length ? str2 : str1;
  for (var i = 0; i < smallest.length; i++) {
    if (biggest.indexOf(smallest[i]) === -1) {
      ret = false;
    }
  }
  return ret;
}

mutation(['hello', 'Hello']);  