function calculateMarks(marks){
  let total = marks.reduce((sum,mark) => sum + mark, 0);
  return total;
}

function calculatePercentage(total, subjects) {
  return total / subjects;
}

function getGrade(percentage) {
  if (percentage >= 90) return "A+";
  if (percentage >= 75) return "A";
  if (percentage >= 60) return "B";
  if (percentage >= 50) return "C";
  return "Fail";

}

function showResult(name, marks) {
  let total = calculateMarks(marks);
  let percentage = calculatePercentage(total, marks.length);
  let grade = getGrade(percentage);

  console.log("Student:", name);
  console.log("Total:", total);
  console.log("Percentage:", percentage + "%");
  console.log("Grade:", grade);
}

showResult("Himanshu", [85, 90, 90, 92, 88]);
