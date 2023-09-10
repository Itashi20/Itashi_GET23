
//Strings

let stringg="Java is open source language  and Javascript is scripting language.java is user friendly and easy to use"

const newstr=stringg.replace('Java','Python');
console.log(newstr);

const pat2=/java/g;
let uppat2=stringg.replace(pat2,'python');
console.log(uppat2);


let pat3=stringg.replaceAll('Java','Hello');
console.log(pat3);

const pat4=/is/gi;
let uppat4=stringg.replace(pat4,'are');
console.log(uppat4);





