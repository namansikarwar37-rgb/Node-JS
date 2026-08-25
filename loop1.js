let percentage = 87;
let entranceScore = 78;
let attendance = 82;
let sportsQuota = false;

if (percentage >= 85 && entranceScore >= 75 && attendance >= 75) {
    console.log("Admission Confirmed - Merit Category");

} else if (percentage >= 75 && entranceScore >= 65 && attendance >= 75) {
    console.log("Admission Confirmed - General Category");

} else if ((percentage >= 70 && entranceScore >= 60) && sportsQuota == true) {
    console.log("Admission Confirmed - Sports Quota");

} else if (percentage >= 60 && attendance >= 80) {
    console.log("Admission possible after interview");

} else {
    console.log("Admission Rejected");
}
