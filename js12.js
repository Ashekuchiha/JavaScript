var p=document.querySelector("div");

p.children[1].textContent=location.href;
p.children[2].textContent=location.port;
p.children[3].textContent=location.host;
p.children[4].textContent=location.pathname;
p.children[5].textContent=location.hostname;
p.children[6].textContent=location.protocol;

var bbb=document.getElementById("bnt");
bbb.addEventListener("click",function(){
    location.assign("https://www.google.com");
})



