let user= {
    name:"yousaf",
    age:17,
    class:"Matric",
    city:"BWP",
    isWeekendOff:true,
    WeekendDays:["Saturday", "Sunday"],
    profile:{
        profileName:"Yousaf Ali",
        profileId:2
    }

}

// console.log(user.city);
// console.log(user.WeekendDays[0]);
// console.log(user.profile.profileName, user.profile.profileId);

// console.log(user["name"]);

let User={};

User.name= "Saad"
// console.log(User);


const obj1= {1:"a", 2:"b"};
const obj2= {3:"a", 4:"d"};
const obj3= {5:"a", 6:"e"};


// const obj4={obj1, obj2,obj3};
// console.log(obj4);


const obj4= {...obj1, ...obj2};
// const obj4= Object.assign({},obj1,obj2,obj3);
// const obj4= Object.assign(obj1,obj2,obj3);
console.log(obj4);

console.log(Object.keys(obj4));
console.log(Object.values(obj4));
console.log(Object.entries(obj4));




