let user1 = {
    name: "Ahmed Raza",
    age: 21,
    occupation: "Web Developer",
    country: "Pakistan"
};


function userObject(anyObject,property){
    if (anyObject.hasOwnProperty(property)){
        console.log(` this ${property} exits in the object which is ${anyObject[property]}`);
        
    }else{
        console.log(`this ${property} does not exit  `);
        
    }
}

// userObject(user1, "name");



function fullName(){
    let firstName= "yousaf";
    function name(){
        let lastName = "ali";
        console.log(` full name is ${firstName} ${lastName}`)
    }

    // console.log(lastName);  //ReferenceError: lastName is not defined due to block scope
    name();
    
}

fullName();




function oneValue(value){
    console.log(++value);
    
}


// oneValue(6);




// console.log(doubleValue(8)); 
// Cannot access 'doubleValue' before initialization

let doubleValue= (value)=>{
    return value*2
}

console.log(doubleValue(89)); 

// IIFE (Immediately Invoked Function Expression)
(function(name){
    console.log("heeleooo from the anonymus function", name);
    
})("yousaf");