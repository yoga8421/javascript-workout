let a = [1, 2, 3, 4];

console.log(a.length);  // Find the Length of Array
console.log(a);


 //Access of Array index
console.log(a[1]);


 // fimd the value of index
 console.log(a.indexOf(1));
console.log(a.indexOf(2)); 
console.log(a.indexOf(3));
console.log(a.indexOf(4));
  

// can be find the value of undefined index

console.log(a.indexOf(5));   //it return -1

//Push & Pop method
a.push(5);
console.log(a);
a.pop();
console.log(a);


// unshift method
// It is used to add the new element begining of Array
a.unshift(1);




for (i = 0; a.length > i; i++) {
    console.log(a);

    // Add the index of array by 1
    console.log(a[i + 1]);

    // Add the index of array value by 1
    console.log(a[i] + 1);
    console.log(a)
}







