//creating Asynchronous by using setTimeout

// function prepareFood (next)
// {
//     setTimeout(()=>{
//         console.log('Food is prepared');
//          next();
//     },3000);
// }
// function eatFood(next){
//      setTimeout(()=>{
//         console.log('Food is eaten');
//          next();
//     },2000);
// }
// function goToSchool(){ 
//      setTimeout(()=>{
//         console.log('went to the school');
//     },1500);
// }
// prepareFood(()=>{
//    eatFood(()=>{
//     goToSchool();
//    });
// });

//using promises

function prepareFood ()
{
    let isFoodReady = true;
    return new Promise((resolve, reject)=>{
setTimeout(()=>{
    if(isFoodReady){
      resolve('Food is prepared');
    }else{
        reject("failed to prepare food");
    }    
    },3000);
    });
    
}
function eatFood(){
    let isFoodEaten = false;
    return new Promise((resolve, reject)=>{
 setTimeout(()=>{
    if(isFoodEaten){
      resolve('Food is eaten');
    }else{
        reject("Didn,t eat the food")
    }
         
    },2000);
    })
    
}
function goToSchool(){
    let isSchoolOpen = true;
    return new Promise((resolve, reject)=>{
     setTimeout(()=>{
        if(isSchoolOpen){
         resolve('went to the school');
        }else{
            reject("school is not open today")
        }
        
    },1500);

    }) 
     
}
prepareFood().then((value)=>{
    console.log(value);
    return eatFood();
}).then((value)=>{
    console.log(value);
    return goToSchool();
}).then((value)=>{
    console.log(value);
    console.log("all promises resolved")
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("all promises resovle or rejected ")
})

