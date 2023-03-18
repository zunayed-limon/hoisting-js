/*Variable*/

var x;
//console.log(x); //undefined
x=2;


//console.log(b); //2
var b=2;


let a;
//console.log(a); //undefined
a=5;


//console.log(y); //Reference error: cannot access y before initialization
let y=5;  


//console.log(z); //Reference error: cannot acesss z before initialization
const z=8;



/* Function */

myName('Limon');  //here no error or undefined(if we call it later, no error or undefined), cause we don't use var, let or const
function myName(name){
    // console.log(name);
}


const myFunction = function(){
    // console.log(22)
};
myFunction(); //22


myFunc(); //Reference Error: cannot acesss myFunc() before initialization (same output, if we use var or let or const)
const myFunc = function(){
    // console.log(20); 
};










