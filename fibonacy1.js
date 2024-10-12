// 0,1,1,2,3,5,8,13

let a=10 ;
let b=[];

for(i=0; i<2; i++){
    if (i==0){
        b.push(0);
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