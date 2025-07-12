/*var username; // hoesting ..this is problematic avoid this ..because it gets o/p undefined  
// var username is automatically adjust upper by js
console.log(name);
var name='aman';

console.log(nickname);
let nickname='attar';*/

let username="a";
let age=21;
let isstudent=true;
let email=null;
let defined =undefined;

console.log(typeof username,'username'); //typeof is operator for detecting data type
console.log(typeof age,'age');
console.log(typeof isstudent,'bollean value student true or false');
console.log(typeof email,'email');// null is data type . js show this object not show null.
console.log(typeof defined,'username');

username=12; // if ones assign then for reasigning not use let 
console.log(typeof username,'username'); // it is dynamic beacuse upper username is string show and next here username number is show.
// hence js is dynamically asign data types . specific data type for specific variable is this concept not in js.
//js automaticaaly detect data types

username=null;
console.log(typeof username,'username');

_username=undefined;// only start character $ , _ , and letter are allow  //only for start 
// and middle special chrater expect $ , _ ,letter or is number is used other special character not used //
// e.g. user#name=false; show error
console.log(typeof _username,'username');
$username=54;
console.log(typeof $username,'username');
username=false;
console.log(typeof username,'username');

 

let studentName="Aman Attar";
let studentAge=21;
let isEntrolled=true;

console.log('Student Name', studentName);
console.log('Age', studentAge);
console.log('Entrolled ', isEntrolled);

console.log('Student Name',typeof studentName);
console.log('Age',typeof studentAge);
console.log('Entrolled ',typeof isEntrolled);