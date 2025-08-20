function removeDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

let arr = [1, 2, 3, 3, 4, 4, 5, 6, 7];
console.log(removeDuplicates(arr)); 