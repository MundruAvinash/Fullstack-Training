//example program of day 3 assingment : ordering biryani 
//1.if we place an order then the request was started
//2.while prepairing the food then it shows waiting 
//3.whan the resturent delivered biryani successfully then it -->Success
//4.when the biryani canceled then it is called --->failure

const order =  new Promise ((resolve,reject)=>{
    const Success = true;

    if(Success){
        resolve("Biryani Delivered");

    }else{
        reject("Order Failed");
    }
});
order 
.then((result)=> console.log(result))
.catch((error)=>console.log(error));