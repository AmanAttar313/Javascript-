// let marks=[97,56,87,18];
// console.log(marks);
// console.log(marks.length);
// console.log(marks[0]);
// marks[1]=5; // hence arrays are mutable means changable
// console.log(marks)

// //array using loops
// let student=["aman","Attar","kill","niko" ];
// for(let i=0;i<student.length;i++){
//     console.log(student[i]);
// }

// //for of loop
// let student=["aman","Attar","kill","niko" ];
// for(let names of student){
//     // console.log(names);
//     console.log(names.toUpperCase());
// }

// ----------------*********************-----------
// practice Quetion find average marks
// let marks =[85,97,44,37,76,60];
// let sum=0;
// let avg=0;
// for(let i=0;i<marks.length;i++){
//     sum+=marks[i];
// }
// avg=sum/marks.length;
// console.log("sum is :",sum);
// console.log("average : ",avg)


// for(let val of marks){
//     sum+=val;
// }
// let avg=sum/marks.length;
// console.log(`avegrage is ${avg}`)
 
//---------------***********************----------------
// practice Quetion 2 ...for given array with prices of 5 items . all items have on 10% offer on them.
//                        change array to store final price after applying offer.

// let items =[200,600,700,250];
// for (let i=0;i<items.length;i++){
//     let offer=items[i]/10;
//     items[i]-=offer; 
// }
// console.log(items);

//----------------------***********************--------------------------------
// // _____array methods__________
// let menu=['chicken handi',450,'arabian mandi',999,'biryani',150,'poplet fry',450];
// menu.push("murg musalam")
// console.log(menu);


// let deleted=menu.pop("murg musalam");
// console.log("deleted", deleted);
// console.log(menu);

// console.log(menu.toString());
// console.log(typeof menu.toString());

// let menu2=['shahi tandoor',350, 'mutton ran',1599];
// let menu3=['chicken samosa',20,'chicken lolipop',50]
// let new_menu=menu.concat(menu2,menu3);
// console.log(new_menu)

// menu.unshift('kohapuri tambda pandhra rassa');
// console.log("using unshift method ",menu)

// menu.shift("kohapuri tambda pandhra rassa");
// console.log(menu)

//-------------------------------------------------------------------
// let heros=['antman','hulk','dr.strange','ironman','thor'];
// console.log(heros.slice(1));
// console.log(heros.slice(1,2));
// console.log(heros.slice(1,3));
//-----------------------------------------------------------------------
let numbers=[1,2,3,4,5,6,7];
// numbers.splice(2,2,101,102);
// console.log(numbers)

// //add element
// numbers.splice(2,0,101);

// //delete element
// numbers.splice(5,1);

// //replace elememt
// numbers.splice(3,1,450);

// //acting like slice
numbers.splice(4);