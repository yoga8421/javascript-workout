let hasPassport = true;
let hasVisa = true;
let age = 18;
if (typeof (hasPassport) == "boolean" && typeof (hasVisa) == "boolean") {
    if ((hasPassport === true) && (hasVisa === true)) {
        if (age >= 18) {
            console.log("Eligible For Booking");

        }
        else {
            console.log("Guardian required for booking");
        }
    }
    else {
        console.log("Not Eligible For Booking ");
    }
}
else {
    console.log("enter correct statement");
}