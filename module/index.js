import {x} from './indexModule.js'

console.log(x);

const x1=()=>{
    console.log("i am x1");
}

const x2=()=>{
    console.log("i am x2");
}

const x3=()=>{
    console.log("i am x3");
    setTimeout(x5,2000);
}

const x4=()=>{
    console.log("i am x4");
}

const x5=()=>{
    console.log("i am x5 call from x3");
}


x1();
x2();
x3();
x4();

const x6=()=>{
    console.log("i am x6");
}

const x7=()=>{
    console.log("i am x7");
}

const x8=(callback)=>{
    console.log("i am x8");
    setTimeout(()=>{
        callback();
    },2000);
    
}

const x9=()=>{
    console.log("i am x9");
}

const x10=()=>{
    console.log("i am x10 call from x8");
}

x6();
x7();
x8();
x9();
