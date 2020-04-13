
function sortArry (arr) {
  let sortedArr = [];

  for (var i = 0; i < arr.length; i++) {
    let min = arr[0];

    for (var j = 0; j < arr.length; j++) {
      if (min > arr[j] && arr[j] !== null) {
        min = arr[j];
      } else if (min === null && arr[j] !== null) {
        min = arr[j];
      }
    }

    // assign null to the found min value index, so in future that portion is escape 
    arr[arr.indexOf(min)] = null;

    //Push the min into new array
    sortedArr.push(min);
  }

  console.log('sortedArr', sortedArr);
}

const rawArr = [50, 56, 110, 236, 465, 322];

sortArry(rawArr);



