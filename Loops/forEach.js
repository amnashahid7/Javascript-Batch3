let coding= ["js", "python","c++", "ruby", "java"];
// coding.forEach(function(item){
//     console.log(item);
    
// })




// coding.forEach(function(item){
//     if(item == "js")
//     {
//         console.log(item);
//     }
//     else if(item == "python")
//     {
//         console.log(item);
//     }
//     else{
//         // console.log("item does not exits");
//         // break; SyntaxError: Illegal break statement
//     }
    
// })


// coding.forEach(()=>{})


//     if (coding[0]=="jss"){
//         coding.forEach(function(item){
//     console.log(item);
    
// })
//     }
//     else{
//         console.log("item not found");
        
//     }



const logMe=(item)=>{
    console.log(item);
    

}

// coding.forEach(logMe);



    let programmingLangs=[
        {
            langName:"Javascript",
            langFileName:"js"
        },
        {
            langName:"Python",
            langFileName:"py"
        },
        {
            langName:"Java",
            langFileName:"java"
        }
    ]

    programmingLangs.forEach((item)=>{
        console.log(item.langFileName, item.langName);
        
    })