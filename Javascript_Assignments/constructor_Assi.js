
function Student(student_name,student_age,student_gender)
{
    this.name=student_name;
    this.age=student_age;
    this.gender=student_gender;
}


let obj1=new Student('Pankaj',23,'Male');
let obj2=new Student('Reena',25,'Female');
let obj3=new Student('Rajeev',26,'Male');


console.log("the name is:" + obj1.name);
console.log("the age is:" + obj1.age);
console.log("the gender is:" + obj1.gender);

console.log("the name is:" + obj2.name);
console.log("the age is:" + obj2.age);
console.log("the gender is:" + obj2.gender);

console.log("the name is:" + obj3.name);
console.log("the age is:" + obj3.age);
console.log("the gender is:" + obj3.gender);


Student.prototype.branch="CSE";
Student.prototype.college="ABC";

console.log(obj1.branch);
console.log(obj1.college);

