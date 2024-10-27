let basePrice = 500;
let age = 6;
let isLoyalMember = false;
let bookingTime = 6;
let destination = "newYork";

if (age <= 12) {
  let discount = (50 / 100) * basePrice;
  basePrice = basePrice - discount;
  console.log(basePrice);
  if (isLoyalMember) {
    basePrice = basePrice - (10 / 100) * basePrice;
    console.log(basePrice);

    if (bookingTime >= 0 && bookingTime <= 6) {
      basePrice = basePrice - (5 / 100) * basePrice;
      console.log(basePrice);
    } else if (bookingTime >= 18 && bookingTime <= 23) {
      basePrice = basePrice + (5 / 100) * basePrice;
      console.log(basePrice);
    }

    if (destination == "newYork" || destination == "tokyo") {
      basePrice = 100 + basePrice;
      console.log(basePrice);
    } else if (destination == "dubai") {
      basePrice = basePrice + 50;
      console.log(basePrice);
    } else if (destination == "paris") {
      basePrice = basePrice;
      console.log(basePrice);
    }
  } else if (isLoyalMember == false) {
    if ((bookingTime >= 0) && (bookingTime <= 6)) {
      basePrice = basePrice - (5 / 100) * basePrice;
      console.log(basePrice);
    } else if (bookingTime >= 18 && bookingTime <= 23) {
      basePrice = basePrice + (5 / 100) * basePrice;
    }

    if (destination == "newYork" || destination == "tokyo") {
      basePrice = 100 + basePrice;
      console.log(basePrice);
    } else if (destination == "dubai") {
      basePrice = basePrice + 50;
      console.log(basePrice);
    } else if (destination == "paris") {
      basePrice = basePrice;
      console.log(basePrice);
    }
  }
} else if (age >= 60) {
  discount = (30 / 100) * basePrice;
  basePrice = basePrice - discount;
  console.log(basePrice);
  if (isLoyalMember) {
    basePrice = basePrice - (10 / 100) * basePrice;
    console.log(basePrice);

    if (bookingTime >= 0 && bookingTime <= 6) {
      basePrice = basePrice - (5 / 100) * basePrice;
      console.log(basePrice);
    } else if (bookingTime >= 18 && bookingTime <= 23) {
      basePrice = basePrice + (5 / 100) * basePrice;
      console.log(basePrice);
    }

    if (destination == "newYork" || destination == "tokyo") {
      basePrice = 100 + basePrice;
      console.log(basePrice);
    } else if (destination == "dubai") {
      basePrice = basePrice + 50;
      console.log(basePrice);
    } else if (destination == "paris") {
      basePrice = basePrice;
      console.log(basePrice);
    }
  } else if (isLoyalMember == false) {
    if (bookingTime >= 0 && bookingTime <= 6) {
      basePrice = basePrice - (5 / 100) * basePrice;
      console.log(basePrice);
    } else if (bookingTime >= 18 && bookingTime <= 23) {
      basePrice = basePrice + (5 / 100) * basePrice;
    }

    if (destination == "newYork" || destination == "tokyo") {
      basePrice = 100 + basePrice;
      console.log(basePrice);
    } else if (destination == "dubai") {
      basePrice = basePrice + 50;
      console.log(basePrice);
    } else if (destination == "paris") {
      basePrice = basePrice;
      console.log(basePrice);
    }
  }
}
else{
    basePrice=basePrice;
}
console.log(basePrice);
