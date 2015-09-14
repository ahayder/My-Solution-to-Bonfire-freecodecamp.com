function findLongestWord(str) {
  var arr = str.split(" ");
  var lgth = 0;
  var longest;

    for(var i=0; i < arr.length; i++){
        if(arr[i].length > lgth){
            lgth = arr[i].length;
            longest = arr[i].length;
        }      
    }
  return longest;
}

findLongestWord('The quick brown fox jumped over the lazy dog');