let bdays = ["10-17", "05-19", "20-19"];
let result = bdays.map((value) => {
  return value.replace(/-/g, "/");
});
console.log(result);
