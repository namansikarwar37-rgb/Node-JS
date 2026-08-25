function operation(a, b, callback){
  return callback(a, b);
}

const multiply = (x, y) => x*y;
const result = operation(5, 4, multiply);

console.log(result);
