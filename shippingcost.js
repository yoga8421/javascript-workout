let weight = 6;
let destination = "international";
let customerType = "vip";
let shippingCost;

if (destination == "international") {
  if (weight < 5) {
    shippingCost = 50;

    if (customerType) {
      let discount = (20 / 100) * 100;
      console.log(discount);
      shippingCost = shippingCost - discount;
    }
  } else if (weight >= 5) {
    shippingCost = 100;
    if (customerType == "vip") {
      let discount = (20 / 100) * 100;
      shippingCost = shippingCost - discount;
    }
  }
} else if (destination == "domestic") {
  if (weight < 5) {
    shippingCost = 10;
    if (customerType == "vip") {
      let discount = (20 / 100) * 100;
      shippingCost = shippingCost - discount;
    }
  }
  if (weight >= 5) {
    shippingCost = 20;
    if (customerType == "vip") {
      let discount = (20 / 100) * 100;
      shippingCost = shippingCost - discount;
    }
  }
}
console.log(shippingCost);
