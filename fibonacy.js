// 07) Write a JavaScript program to generate the Fibonacci sequence up to a specified number of terms.
	// o/p --> Enter the number of terms in the Fibonacci sequence: 8
    // The Fibonacci sequence with 8 terms is: 0, 1, 1, 2, 3, 5, 8, 13

let a=8 ;
let b=[];

for(i=0; i<2; i++){
    if (i==1){
        b.push(1);
    }
    else{
      b.push(1)
    }
}

a-=2;      
console.log(a);
for(i=0;i<a;i++){
    b.push(b[i]+b[i+1]);
}
console.log(b)