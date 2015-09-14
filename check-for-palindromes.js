function palindrome(str) {
  var var1 = str.toLowerCase();
  var var2 = var1.replace(/ /g,'');
  var var3 = var2.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  var var4 = var3.split('').reverse().join('');
  
  if(var3 === var4){
    return true;
  }
  else{
    return false;
  }

}



palindrome("eye");