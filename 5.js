let value = [1, 2, 3, 4, 5, 6];

value.forEach((num, index, array) => {
  array[index] = num * 2;
});

console.log(value);
