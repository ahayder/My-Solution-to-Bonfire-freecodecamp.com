function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var var2 = str.split(' ');
  var last = var2[var2.length - 1];
  
  if(var2.length > 1){
    if(last === target){
      return true;
    }
    else{
      return false;
    }
  }
  else{
     var var3 = str.substr(-1, 1); 
     if(var3 === target){
       return true;
     }
    else{
      return false;
    }
  }
}

end('Bastian', 'n');