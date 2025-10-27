const user={
    name:"ahmad",
    city:"Bahawalpur"
}
const user1={
    name:"ahmad raza",
    city:"lahore"
}



function anyObject(object){
    console.log(`the object given is : ${object.name} : ${object.city}` )

}

// anyObject(user1)



let arr1= [1,2,3,4,5,6,7];
let arr2= ["ahmad", "yousaf", "saad"];


function anyArray(array){
    return ` the second element of the array is ${array[1]}`
}

let arrayresult= anyArray(arr2);
// console.log(arrayresult);



let userObject={
    name:"yousaf",
    age:20,
    isLoggedInDays:["Monday", "Saturday"],
    displayName: function (){
        console.log(` the name of the person is ${this.name}`)
    }
}

// userObject.displayName();

userObject.name= "yousaf ali";

// console.log(userObject.name);
// userObject.displayName();



let  displayName2= function (){
     name = "amna";
        console.log(` the name of the person is ${this.name}`)
    }


    // displayName2();
// arrow function
    let nameSay= (age, name)=>{
        console.log(`${age}, ${name}`);
        

    }


    nameSay(22,"saad")


 