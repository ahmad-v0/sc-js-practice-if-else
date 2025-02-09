var day = "Friday";
// if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
//     console.log("Working Day.");
// } else if ( day === "Saturday" || day === "Sunday") {
//     console.log("Holiday.")
// } else {
//     console.log("Invalid input!")
// } 
if (typeof (day) !== "string") { // check if the given input is a string
    console.log("Not a String!");
} else {
    day = day.toLowerCase(); // convert all character of the given string to lower case
    if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday"){
        console.log("Working Day.");
    } else if ( day === "saturday" || day === "sunday") {
        console.log("Holiday.")
    } else {
        console.log("Invalid input!")
    }
} 
