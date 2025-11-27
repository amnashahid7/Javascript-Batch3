let button =document.querySelectorAll('button');
console.log(button);
button.forEach((btn)=>{
    btn.addEventListener('click', ((e)=>{
    //    document.body.style.backgroundColor=e.target.id;
    if(e.target.id==='red'){
        document.body.style.backgroundColor='red';
    }
    if(e.target.id==='yellow'){
        document.body.style.backgroundColor='yellow';
    }
    if(e.target.id==='blue'){
        document.body.style.backgroundColor='blue';
    }
    if(e.target.id==='pink'){
        document.body.style.backgroundColor='pink';
    }
    }
))
    
})
