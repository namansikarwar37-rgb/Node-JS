let students = [
  {name: "Rahul", age: 20},
  {name: "Amit", age: 22},
  {name: "priiya", age: 21}
];

let student = students.find((item) => {
  return item.name === "Amit";
});

console.log(student);
