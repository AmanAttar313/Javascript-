// function sum(x,y){
//     console.log("sum is :",x+y);
// }
// sum(3,4);

// //by return value
// function sum(x,y){
//     add=x+y;
//     return add;
// }
// let addition=sum(5,5);
// console.log(addition);

//---------------------------------------------------------------
//arrow function

// const sum=(a,b)=>{
//     console.log(a+b);
// };
// sum(3,3);
//------------------------
// let mul=(a,b)=>{
//     return a*b;
// };
// console.log(mul(3,3));

// -----------------------
// let display= () =>console.log("Js is Popular language")
// display();

//-------------------------------****************************------------------------------
// practice que  : count vowels using functions
/*function CountVowels(str){
    let count=0;
    for(const char of str){
        if(char==="a" || char=== "e" || char=== "i"|| char==="o" || char==="u"
             ||char==="A" || char=== "E" || char=== "I"|| char==="O" || char==="U"  )
            count++;
            }
           
            return count;

}*/
//----------------------------*****************--------------------------------------

// forEach loop

// let arr=[1,2,3,4];
// arr.forEach(function print(val){
//  console.log(val);
// });
//---------------------
// forEach loop using arrow function

// arr.forEach((val)=>{
//     console.log(val);
//    });

//--------------------
// let city=["pune","goa","mumbai"];
// city.forEach((val,idx,arr)=>{
//     console.log(val.toUpperCase(),idx,arr);
//    });

//----------------------
////practice quetion: using array , print square of each value in array using forEach loop
// let nums=[1,2,3,4,5];
// nums.forEach((num)=>{
//     console.log("square",num*num);
//     console.log("cube",num*num*num)


// })

//--------------********************-----------------

////map method (same as forEach)
// let arr=[1,2,3,4];
// arr.map((val)=>{
//    console.log(val); 
//   });

////----------------new arr making
// let arr1=[1,2,3,4];
// let newarr=arr1.map((val)=>{
//    return val; 
//   });

// console.log(newarr)

//---------------------*********************--------------------------

// // filter 
// let numarr=[1,2,3,4,5,6];

// let evenarr=numarr.filter((val)=>{
//     return val%2==0;
// });
// console.log(evenarr);

//---------------------------**************************--------------------

//Reduce method
// let array=[1,2,3,4];
// let output=array.reduce((result, current_val)=>{
//     return result+current_val;
// })
// console.log(output);
//-----------------------
// max number
// let output=array.reduce((prev, curr)=>{
//     return prev>curr?prev:curr;
// })
// console.log(output);

//----------------*******************-----------------
//practice quetion 1: taking an array and filter out 90+ marks . 

// let marks=[37,85,99,98,54];
// let filteringMarks=marks.filter((val)=>{
//  return val>90;
// });
// console.log(filteringMarks);

//-------------
//que 2 :take number  n as input from user.Create an array of 1 to n numbers.
         //use reduce method to calculate sum of all numbers in array.use reduce method to calculate product
         // of all numbers in array
 let n=prompt("Enter number :");
 let arr=[]; // empty array
 for(let i=1;i<=n;i++){
    arr[i-1]=i; // 1(0),2(1),3(2),....n(N);
 }
 console.log(arr);

 let sum_of_numbers=arr.reduce((prev,curr)=>{
        return prev+curr;
 })
 console.log("sum :",sum_of_numbers)

 let product_of_numbers=arr.reduce((prev,curr)=>{
    return prev*curr;
})
console.log("factorial or product of numbers :",product_of_numbers)