//program to find simple interest in javascript

function S(p,r,t)
{
    var int1=(p*r*t)/100;
    return int1;
}

var a=S(100,5,10);
var b=S(200,4,20);

console.log("The calculated sum is :" +(a+b));
