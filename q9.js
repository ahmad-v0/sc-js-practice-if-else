var num = "";
if (isNaN(num) || num === "") { // javascript treats " " as numerical 0 (Zero)
    console.log("Invalid Input!");
} else if (num > 0) {
    console.log("Positive.");
} else if (num < 0) {
    console.log("Negative.");
} else {
    console.log("Zero.");
} 