let score = 1;
let attendance = 1;
let extraCredit = -9;
// let adjustmentScore;
if ((typeof (score) == "number") && (typeof (attendance) == "number") && (typeof (extraCredit) == "number")) {
    if ((score <= 100)&&(score >= 0) && (attendance <= 100)&& (attendance >= 0) && (extraCredit <= 100)&& (extraCredit >= 0)) {
        if ((score >= 70) && (attendance >= 80)) {
            console.log("pass");
        }

        else if ((score <= 70) && (extraCredit >= 10)) {
            let adjustmentScore = (score + extraCredit);
            console.log(adjustmentScore);
            if (adjustmentScore >= 70) {
                console.log("pass");

            }
            else {
                console.log("fail");
            }

        }
        else if (attendance <= 80) {
            console.log("fail");
        }
        else {
            console.log("enter the correct value");
        }
    }
    else {
        console.log("enter the value between 0 to 100");
    }
}
    else {
        console.log("Enter Number Only");
    }






