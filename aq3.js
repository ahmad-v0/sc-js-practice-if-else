var accBalance = 499;
var withdrBalance = 500;
// if (withdrBalance > accBalance) {
//     console.log("Insufficient Balance!");
// } else {
//     if (withdrBalance <= accBalance && withdrBalance >= 500) {
//         console.log("Transaction Successful.");
//     } else {
//         console.log("Minimum withdrawal Balance is BDT 500.");
//     }
// }
if (withdrBalance < 500) {
    console.log("Minimum Withdrawal Amount is BDT 500");
} else if (withdrBalance <= accBalance) {
    console.log("Successful Transaction.");
} else {
    console.log("Insufficient Fund.");
}
