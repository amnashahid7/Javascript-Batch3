// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


let key= "dec";
switch (key) {
    case "jan":
        console.log("the month is january");
        break;
        
    case "feb":
        console.log("the month is feb");
        break;
        
    case "march":
        console.log("the month is march");
        break;
        
    case "april":
        console.log("the month is april");
        break;
        
    case "may":
        console.log("the month is may");
        break;
        

    default:
        console.log("not from the given cases");
        
        break;
}



// let email1=["abc@gmail.com"];
// if(email1.length){
// console.log(email1);

// }
// else{
//     console.log('please enter the email');
    
// }

// false values:
// false,0,-0,Bigint 0n, null,undefined, NaN
// truth values:
// true, 1, "0",[], {}, function (){}, " ", "false"



// ? ternary operator


let email= "abc@gmail.com";
 email ?  console.log("helo from if the email is present") : console.log("not present") ;
 

// Nullish coalescing assignment/ operator ??


let val1= null ?? 10
console.log(val1);

