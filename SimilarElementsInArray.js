function getSimilarElements(firstArr, secondArr) {
  if(!(Array.isArray(firstArr) && Array.isArray(secondArr))) {
    console.log("Arguments are invalid");
  }
  let i=0, j=0, found=false, similarElements=[];
  while(secondArr.length>j && firstArr.length >i) {
    if(firstArr[i] > secondArr[j]) {
      j++;
    } else if(firstArr[i] === secondArr[j]) {
      found = true;
      similarElements.push(firstArr[i]);
      i++;
      j++;
    } else {
      i++;
    }
  }
  if(!found) {
    console.log("No Similar Elements Found");
  } else {
    console.log(similarElements);
  }
}

// test 
// var arr1 = [0,1,2,3,4,5,6,7,8,9];
// var arr2 = [10,11,12,13,14,15,16,17,18,19];
// getSimilarElements(arr1, arr2);
