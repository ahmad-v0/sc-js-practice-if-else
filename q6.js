var marks = 32;
if (!isNaN(marks) && marks >= 33 && marks <= 100) {
    console.log('Pass!');
} else if (!isNaN(marks) && (marks >= 0 && marks < 33)) {
    console.log('Fail!!');
} else {
    console.log('Wrong Input!!!')
}