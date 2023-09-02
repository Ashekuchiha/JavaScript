//creat a promise
const pro1=new Promise((resolve,reject)=>{
    let x=true;
    if (x) {
        resolve(`it solved`);
    }
    else{
        reject(new Error(`it not solved`));
    }
})
//creat a normal promise
const pro2=new Promise((resolve,reject)=>{
    resolve(`hi i am promise 2`);
})
//promise call then=resolve,catch=reject or error
pro1
.then((Response)=>{
    console.log(Response);
})
.catch((Response)=>{
    console.log(Response);
})
//normal call without reject
pro2
.then((Response)=>console.log(Response))
//promise call together and distructure all er poribortay race function use kora jai 
Promise.all([pro1,pro2])
.then(([Response1,Response2])=>console.log(`${Response1} and ${Response2}`))