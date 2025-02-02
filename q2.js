var num2 = 11111;
var num1 = 24654;
var num3 = 94651;

// if (num1 > num2) {
//     if (num1 > num3) {
//         console.log ('num1 is the largest number.');
//     } else {
//         console.log('num3 is the largest');
//     }
// } else {
//     if (num2 > num3) {
//         console.log('num2 is the largest number.');
//     } else {
//         console.log('num3 is the largest number.')
//     }
// }

if (num1 > num2 && num1 > num3) {
    console.log("Number 1 is the largest number.");
} else if (num2 > num1 && num2 > num3) {
    console.log("Number 2 is the largest numver");
}
else {
    console.log("Number 3 is the largest number.");
}
