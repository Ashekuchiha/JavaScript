var btns = document.querySelectorAll(".bc");
//console.log(btns);

Array.from(btns).map((btn)=>{
    btn.addEventListener("click",function(e){
        console.log(e);
        console.log(e.target.value);
    })
})

var text=document.querySelector("textarea");
text.addEventListener("keyup",function(e){
    console.log(e.code);
})
//js code for drag
let d=document.querySelector("div");
let p=document.querySelector("img");

p.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("text",e.target.id);
})

d.addEventListener("dragover",function(e){
    e.preventDefault();
})

d,addEventListener("drop",function(e){
    let id=e.dataTransfer.getData("text");
    d.appendChild(document.getElementById(id));
    e.preventDefault();
})
//***********










