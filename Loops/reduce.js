const array = [1, 2, 3, 4, 5, 6, 7];
// const values= array.reduce((acc,curr)=>(acc+curr),100);
// console.log(values);

const values = array.reduce((acc, curr) => {
  console.log(`acc ${acc}, current value ${curr}`);
  return acc + curr;
}, 6);


// console.log(values);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];
let totalAmount= shoppingCart.reduce((acc,item)=>{
      console.log(`acc ${acc}, current value ${item.price}`);
      return acc+ item.price
    
},0);
console.log(totalAmount);

