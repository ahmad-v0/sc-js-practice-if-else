var marks = "100";
if (typeof marks !== "number" || marks < 0 || marks > 100) { //  typeof  ensure that input 
                                                             //  must be a number
    console.log('Invalid Marks!!');
} else if (marks >= 80) { //  including condition "marks <= 100" inside the condition is 
                          // redundant as the first condition completes that part
    console.log('Grade: A');
} else if (marks >= 60 && marks <= 79) {
    console.log('Grade: B');
} else if (marks >= 40 && marks <= 59) {
    console.log('Grade: C');
} else {
    console.log('Grade: F');
}