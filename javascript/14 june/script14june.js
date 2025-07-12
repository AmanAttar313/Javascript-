// let age=19;
// if (age>=18){
//     console.log("You can vote")
// }
// if(age<18){
//     console.log("you cannot vote")
// }

//------------------*****-------------------------

// let mode="light";
// let color;

// if(mode==="dark"){
//     color="dark";
// }
// if(mode==="light"){
//     color="white";
// }
// console.log(color);

//------------------*****-------------------------
// let age=11;
// if (age>=18){
//     console.log("You can vote")
// }
// else{
//     console.log("you cannot vote")
// }
//------------------*****-------------------------

// let num=10;
// if(num%2===0){
// console.log(num," number is even")
// }
// else{
//     console.log(num, " Number is odd")
// }

//------------------****------------

//ternary operator
// let age=17;
// let result=age>=18 ? "adult" : "not adult";
// console.log(result);

//------------****--------------------

// practice quetions
// Q1. GET USER To input using prompt("enter number: ").check if number is multiple of 5 or not ? 

// let num=prompt("Enter The Number");
// if(num%5===0){
//     console.log(num," Number is multiple of 5");
// }else{
//     console.log(num," number is not multiple of 5");
// }
//-----------------------****************------------------------------

// Q2.write a code which can give grades to students according to thier scores:
// ~90-100 =A 
// ~80-89 =B 
// ~60-69 =c 
// ~50-59=D 
// ~0-49 =F

let score=prompt("enter the Marks");
if(score>=90 && score<=100 ){
    console.log("Grade A");
}else if(score>=80 && score<=89){
    console.log("Grade B")
} else if(score>=70 && score<=79){
    console.log("Grade c")
}
else if(score>=40 && score<=69){
    console.log("Grade D")
}
else{
    console.log("Fail")
}
 