let dayOverdue = 120;

let isRareBook = true;
let hasMembership = true;
let discount = 50;

if (isRareBook == true) {
  // console.log("Base fee is $5 per day");
  let totalFee = 5 * dayOverdue;
  console.log(totalFee);
  if (hasMembership == true) {
    let totalFee2 = (discount / 100) * totalFee;
    console.log(totalFee2);
    // if(totalFee2>100)
  } else {
    console.log(totalFee);
  }
} else if (isRareBook == false) {
  totalFee = 1 * dayOverdue;
  console.log(totalFee);
  if (hasMembership == true) {
    let totalFee2 = (discount / 100) * totalFee;
    console.log(totalFee2);
  } else {
    console.log(totalFee);
  }
}
