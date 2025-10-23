//  user={
//         "name":"Yousaf",
//         "age":20
//     }
//     console.log(user);



// Object Destructoring

const cousre ={
    courseName:"Javascript",
    cousreId:2,
    courseDuration:"2 month"
}
const cousre2 ={
    courseName:"Python",
    cousreId:1,
    courseDuration:"3 month"
}


const {courseName,courseDuration} = cousre;
console.log(courseName,courseDuration);
// name allias
const {courseName : course2Name,courseDuration : duration2} = cousre2;
console.log(course2Name,duration2);



// questions 
// Get all keys of the person object using Object.keys().

// Get all values of the person object using Object.values().

// Get both keys and values using Object.entries().
// Create an object named person with properties: name, age, and city. Log all values to the console.

// Access and print only the name property of the person object.

// Add a new property country to the person object and print the updated object.
// Create an object with nested properties (e.g., person.address.city) and log the nested value
// Merge two objects  and print the result.
// Convert an object into an array of key-value pairs using Object.entries().

// Convert that array back into an object using Object.fromEntries().
// Freeze an object using Object.freeze() and try to modify it



    