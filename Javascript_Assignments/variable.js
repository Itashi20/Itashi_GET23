
//var ->declring variable
//var age=18;
let age=23;
console.log(age);


console.log("the age is :" + age);
//var is global scoped

{
   let  age=34; //scoped variable with declasration of let
    console.log("the age inside the scope" +age);

}

//no sense of scope in this
console.log("the age outside the scope" +age);  //thats why age is 34 outside the scope


//let keyword

//let,var,const   let is  scoped within block and var is globally scoped and const will declare fixed value


//functions
function add(a,b,c)    //formal arguments
{
    let d=a+b+c;
   // console.log("the sum is :"+d);
   return d;
}

let result=add(1,2,3);  //passing actual arguments

console.log("the sum is :"+ result);




//program to find simple interest in javascript

function S(p,r,t)
{
    var int1=(p*r*t)/100;
    return int1;
}

var a=S(100,5,10);
var b=S(200,4,20);

console.log("The calculated sum is :" +(a+b));



//default parameters in a a function


//dynamic paramteres

function add()
{
    let sum =0;
    for(let i=0;i<arguments.length();i++){
        sum+=arguments[i];
    }
    return sum;
}


console.log(add(1,2));



