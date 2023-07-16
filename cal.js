
let valu="";
let display=document.querySelector(".display");

let buttons=document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let butt=e.target.innerHTML;
        if(butt == "="){
            valu=eval(valu);
            display.value=valu;
        }else if(butt == "ac"){
            valu=""
            display.value=valu;
        }else if(butt == "del"){
            valu=valu.slice(0,-1);
            display.value=valu;
        }else{
            valu=valu+butt;
            display.value=valu;
        }
    })
})
