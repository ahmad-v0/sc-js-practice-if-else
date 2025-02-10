var email = "user@example.com";
var password = "";
if (email === "user@example.com" && password === "123456") {
    console.log("Welcome User...")
} else {
    if (email !== "user@example.com") {
        console.log("Invalid Email.");
    } else {
        console.log("Invalid Password.");
    }
}