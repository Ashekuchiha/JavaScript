
//callback with promise

const f1=()=>{
    return new Promise((resolve,reject)=>{
        resolve(`it solved 1`);
    })
}
const f2=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`it solved 2`);
        },2000)
    })
}
const f3=()=>{
    return new Promise((resolve,reject)=>{
        reject(new Error(`it not solved `));
    })
}
const f4=()=>{
    return new Promise((resolve,reject)=>{
        resolve(`it solved 4`);
    })
}
async function callAllTask(){
    try {
        const t1=await f1();
        console.log(t1);
        const t2=await f2();
        console.log(t2);
        const t3=await f3();
        console.log(t3);
        const t4=await f4();
        console.log(t4);
    } catch (error) {
        console.log(error.message);
    }
}
callAllTask();
// f1()
// .then((Response)=>{
//     console.log(Response);
// })
// .then(f2)
// .then((Response)=>{
//     console.log(Response);
// })
// .then(f3)
// .then((Response)=>{
//     console.log(Response);
// })
// .then(f4)
// .then((Response)=>{
//     console.log(Response);
// })
// .catch((Error)=>{
//     console.log(Error);
// })