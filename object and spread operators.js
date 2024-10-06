// empty object
let dhana = {}




// dotnotation
dhana.username = 'yoga'
dhana.age = 26
dhana.gender = 'female'
console.log(dhana);




// bracketnotation

let colour = 'colour';

dhana[colour] ='red';
console.log(dhana);

dhana[colour] = 'Blue';
console.log(dhana);

// spred operator

let newObj = {
    dhana,
    height:150,
    weight:50
}
console.log(newObj );

newObj.dhana.gender='male';
console.log(newObj)

let newObj2 = {
    ...dhana,
    friend:'sai',
    friend2:'yoga'
}
console.log(newObj2)