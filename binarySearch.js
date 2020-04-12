function binarySearch(givenArrayLength, chosenVal) {
  const itemsArr = [];
  let steps = 1;
  let newArr;

  // compose itemsArrArr with the givenArrayLength
  for (i =0; itemsArr.length < givenArrayLength; i++) {
    itemsArr.push(i);
  }

  // Invoke 'getFilterArr' which returns new array with removed unmatched number
  newArr = getFilterArr (itemsArr, chosenVal);
  
  // filter array untill newArr length reached to > 5
  while (newArr.length > 5) {
    steps += 1;
    newArr = getFilterArr (newArr, chosenVal);
  }

  newArr.map( i => {
    if(i === chosenVal) {
      console.log(`the given value was ${i} and tooks ${steps} steps to find from the given ${givenArrayLength} arrya length`);
    }
  });
}

function getFilterArr (arr, chosenVal) {
  const jumpVal = parseInt(arr.length/2);
  for (i = jumpVal; i <= arr.length; i += jumpVal) {
    if(arr[i] > chosenVal) {
      return arr.slice(0, i);
    } else {
      return arr.slice(i, arr.length);
    }
  }
}

//Invoke function with length of array and find value
binarySearch(1000, 688);
