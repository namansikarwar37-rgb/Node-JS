let pin = 1234;
let enteredPin = 1234;
let balance = 25000;
let amount = 10000;
let accountActive = true;

if (!accountActive) {
    console.log("Account is inactive");

} else if (enteredPin != pin) {
    console.log("Incorrect PIN");

} else if (amount <= 0) {
    console.log("Invalid withdrawal amount");

} else if (amount > balance) {
    console.log("Insufficient balance");

} else if (amount > 20000) {
    console.log("Daily withdrawal limit exceeded");

} else if (amount % 100 != 0) {
    console.log("Enter amount in multiples of 100");

} else {
    balance = balance - amount;
    console.log("Withdrawal successful");
    console.log("Remaining Balance:", balance);
}
