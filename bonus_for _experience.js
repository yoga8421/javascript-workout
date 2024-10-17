let experience = 3;
let performanceRating = "Average";

if ((experience <= 5) && (performanceRating == "excelent")) {
    console.log("to give a 20% bonus");
}
else if (((experience >= 3) && (experience < 5)) && (performanceRating == "good")) {
    console.log("to give a 10% bonus");
}
else if ((experience <= 3) && (performanceRating == "Average")) {
    console.log("to  give a 5% bonus");
}
else if (performanceRating == "poor") {
    console.log("to not give a bonus");
}
else {
    console.log("return the percentage of bonus");
}

