let gpa =3.5;
let examScore= 85;
let hasExtraCurricular =true;
let result ;
// console.log('ggggg')

if((gpa>=3.5)&&(examScore>=85)){
    if(hasExtraCurricular)
    {
        result ="AdmissionGranted with scolorship";
        // console.log(result);
    }
    if(hasExtraCurricular== false){
        result="admission granted without schloorship";
        // console.log(result);
    }
    
 if((gpa <3.4)||(examScore<85)){
 
    result ="admission denied";
    
}
}

console.log(result);