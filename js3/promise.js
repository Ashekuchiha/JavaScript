//const { error } = require("console");

const status = false;
console.log("task1")
const promise = new Promise((res,rej)=>{
    setTimeout(()=>{
        if(status){
            res("task2")
        }else{
            rej("failed")
        }
    },2000)
})
promise
.then((value)=>{
    console.log(value)
})
.catch((error)=>{
    console.log(error)
})
console.log("task3")