let myMark=-49;

if (typeof (myMark) === "number") {


    if ((myMark <= 100) &&(myMark>=0)){



        if ((50 <= myMark) && (55 >= myMark)) {
            console.log("E grade");
        }
        else if ((56 <= myMark) && (60 >= myMark)) {
            console.log("D grade");
        }
        else if ((61 <= myMark) && (70 >= myMark)) {
            console.log("C grade");
        }
        else if ((71 <= myMark) && (80 >= myMark)) {
            console.log("B grade");
        }
        else if ((81 <= myMark) && (90 >= myMark)) {
            console.log("A grade");
        }
        else if ((91 <= myMark) && (100 >= myMark)) {
            console.log("S grade");
        }
        else {
            console.log("U grade");
        }
    }
    else {
        console.log("enter The correct Mark");
    }
}

else {
    console.log("Enter number only");
}