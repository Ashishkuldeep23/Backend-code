
// // Promise in Js code --->


let p = new Promise((resolve , reject) =>{

    let a = 2

    if(a+1 == 2){
        resolve(console.log("Successful"))
    }else{
        reject(console.log("Not successful"))
        
    }
    

})



p.then().catch((err)=>{console.log(err)})


// console.log(p)
