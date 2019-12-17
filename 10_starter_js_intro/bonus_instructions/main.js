var cashRegister = 10
var safe = 20
var change = 5

if (cashRegister <= 50) {
    console.log("Please wait while I go to the Bank")
}
if (cashRegister >= 8) {
    console.log("Have a Nice Day")
}
if (cashRegister <= 15) {
    console.log("Please wait while I go to the Safe")
}

var withdrawl1 = cashRegister
if (withdrawl1 === 50) {
    console.log("Withdraw $40")
}
var withdrawl2 = safe + cashRegister
if (withdrawl2 === 50) {
    console.log("Withdraw $20")
}
var withdrawl3 = safe
if (withdrawl3 === 50) {
    console.log("Withdraw $30")
}
// var res = withdrawl1.concat(withdrawl2, withdrawl3)