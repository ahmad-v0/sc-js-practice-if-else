var basePrice = 0;
var discount;
// if (basePrice > 500) {
//     console.log(`Base Price: BDT${basePrice}`);
//     console.log(`Discount: 20%`);
//     console.log(`Price after discount: ${basePrice - (basePrice*0.2)}`);
// } else if (basePrice <= 500 && basePrice >= 200) {
//     console.log(`Base Price: BDT${basePrice}`);
//     console.log(`Discount: 10%`);
//     console.log(`Price after discount: ${basePrice - (basePrice*0.1)}`);
// } else {
//     console.log(`Base Price: BDT${basePrice}`);
//     console.log(`Discount: N/A`);
//     console.log(`Price after discount: ${basePrice}`);
// }

if (basePrice <= 0) {
    console.log("Total: 0");
} else {
    if (basePrice > 500) {
        discount = 0.2;
    } else if (basePrice <= 500 && basePrice >= 200) {
        discount = 0.1;
    } else {
        discount = 0;
    }
    console.log(`Base Price: ${basePrice}`);
    console.log(`Discount Applicable: ${discount*100}%`);
    console.log(`Price after discount: ${basePrice - (basePrice*discount)}`);
}
