function where(arr, num) {
  
  for(var i = 0; i < arr.length; i++){
    if(arr[i] == num){
       return i;
    }
  }
  for(i = 0; i < arr.length; i++){
     if(arr[i] < num && arr[i+1] > num){
       return i+1;
     }
  }
  
}

where([10, 20, 30, 40, 50], 30);
  