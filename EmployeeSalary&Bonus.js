let salary = 60000;
let experience = 5;
let performance = 9;
let attendance = 92;
let warning = false;

if (warning == true) {
    console.log("No bonus - Employee has warning");

} else if (salary >= 50000 && experience >= 5 && performance >= 9 && attendance >= 90) {
    console.log("20% Bonus + Promotion");

} else if (salary >= 40000 && experience >= 3 && performance >= 8 && attendance >= 85) {
    console.log("15% Bonus");

} else if ((performance >= 7 && attendance >= 80) || experience >= 7) {
    console.log("10% Bonus");

} else if (attendance < 75 || performance < 5) {
    console.log("No Bonus");

} else {
    console.log("5% Bonus");
}
