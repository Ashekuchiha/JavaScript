
const f1=(callback)=>{
    console.log("i am one");
    callback();
}
// const f2=()=>{
//     console.log("i am data from two");
// }

const f2=(callback)=>{
    setTimeout(()=>{
        console.log("i am data from two");
        callback();
    },2000);
}
const f3=(callback)=>{
    console.log("i am three");
    callback();
}
const f4=(callback)=>{
    console.log("i am four");
    callback();
}
const f5=(callback)=>{
    console.log("i am five");
}

f1(()=>{
    f2(()=>{
        f3(()=>{
            f4(()=>{
                f5();
            })
        })
    })
})
