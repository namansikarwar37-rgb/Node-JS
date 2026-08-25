function calculate(a,b, operation){
  return operation(a,b);
}

function add(x, y) {
  return x + y;
}

console.log(calculate(10, 20, add));


// Concept: yahn add function ko dusre function ke andr argument ke roop mein pass kiya hai.
// Isi concept ko call back function kehte hai
