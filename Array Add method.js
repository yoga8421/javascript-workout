// 14) Default array list arr=[5,10,15,20,25,30] Add value 5 to each element of an given array.
// 	o/p --> newArray=[0,5,10,15,20,25]


const defaultArr = [5, 10, 15, 20, 25, 30];

const newArray = [];

for (i = 0; i < defaultArr.length; i++) {
    console.log(defaultArr[i] + 5)
    newArray.push(defaultArr[i] + 5);
}
console.log(newArray);