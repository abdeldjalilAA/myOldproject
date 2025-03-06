let stocks = {
  Fruits : ["strawberry", "grapes", "banana", "apple"],
  liquid : ["water", "ice"],
  holder : ["cone", "cup", "stick"],
  toppings : ["chocolate", "peanuts"],
};
let shop_open= 2;
let order=(time,work)=>{

  
    return new Promise((res,rej)=>{
      if(shop_open){
        setTimeout(() => {
          res(work());
        }, time);
      }else{
        rej(  console.log('Shop IS Close'));
      }
    })
  };

  order(2000,()=>{console.log(`${stocks.Fruits[0]} Was Selected`)})
  .then(()=>{return order(2000,()=>console.log(`Product has prepared`));} )
  .then(()=>{return order(2000,()=>console.log(`Fruits has chopped`));} )
  .then(()=>{
    return order(1000,()=>{console.log(`${stocks.liquid[0]} And ${stocks.liquid[1]} Was Added`)});} )
  .then(()=>order(1000,()=>{console.log(`start machine`)}))
  .then(()=>{
    return order(2000,()=>{console.log(`${stocks.holder[1]} Was Added`)});} )
  .then(()=>{
    return order(3000,()=>{console.log(`${stocks.toppings[1]} Was Added`)});
  } )
  .then(()=>{
    return order(2000,()=>console.log(`Serve your ice creame`));
  } )
  .catch(()=>{
    console.log('There is no cutomer');
  }).finally(()=>{
    console.log('day ended ')
  })




// Function 1

// let order = (fruit_name, call_production) =>{
//   setTimeout(()=>{
//     console.log(`${stocks.Fruits[fruit_name]} Was Selected`)
//     call_production();
//   },2000);
  
// };

// Function 2

// let production = () =>{
  
//   setTimeout(()=>{
//     console.log(`Product has prepared`);

//     setTimeout(()=>{
//       console.log(` Fruits has chopped`);
//       setTimeout(()=>{
//         console.log(`${stocks.liquid[0]} And ${stocks.liquid[1]} Was Added `);
      
//       setTimeout(()=>{
//         console.log(`Machine Started`);
      
//         setTimeout(()=>{
//           console.log(`${stocks.holder[0]} Was Selected`);

//           setTimeout(()=>{
//             console.log(`${stocks.toppings[0]} Was selected`);
//             setTimeout(()=>{
//               console.log(`Here you go your ice creame`);
//             },2000);
//           },3000);
//         },2000);
//       }
      
//       ,1000);}
//       ,1000);

//     },2000);
  
    

    

    
  
    
//   },0000);
// };


// Trigger 👇

// order("0", production);