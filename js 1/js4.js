var vp = document.querySelector("#ip");

function as(){
    vp.classList.add("cp");
}
function rs(){
    vp.classList.remove("cp");
}

var vh = document.querySelector("h1");

// vh.addEventListener("mouseover",function (){
//     vh.classList.add("cp");
// })
vh.addEventListener("mouseover",ass);
function ass(){
    vh.classList.add("cp");
}

vh.addEventListener("mouseleave",function (){
    vh.classList.remove("cp");
})
