let arr1= [1,2,3,4,5,6,7,8,9];
let arr2= ["saad","yousaf", "saif"];
let arr3= [1, "ali", true, 0.88, ["ahmad", 99], {name:"amna"}];
// console.log(arr1,arr2,arr3 );

// console.log(arr1[3]);
// console.log(arr3[4][0]);
// console.log(arr3[5].name);

// arr1.push(10);
// console.log(arr1);

// arr1.pop();
// console.log(arr1);

arr1.unshift("amna");
// console.log(arr1);
arr1.unshift("AHMAD");
// arr1.shift();
// console.log(arr1);

// console.log(arr1.includes('Aamna'));
// console.log(arr1.indexOf(9));

let joinArr= arr1.join();
// console.log(joinArr.toUpperCase());

let newArr= arr2.concat(arr3);
// console.log(newArr.flat(Infinity));

let speardArr= [...arr1,...arr2,...arr3];
// console.log(speardArr);

let new1= new Array();
// console.log(Array.isArray("amna"));
// console.log(Array.from(12));

let a1= 100;
let a2=70;
let a3=88;
console.log(Array.of(a1,a2,a3));










