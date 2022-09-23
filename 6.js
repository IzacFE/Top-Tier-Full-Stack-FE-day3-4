let arr = [1.5, 2.56, 5.1, 12.33];

arr.forEach((value, index, array) => {
  array[index] = Math.ceil(value);
});

console.log(arr);
