var area=document.querySelector("textarea");
var p1=document.querySelectorAll("p")[0];
var p2=document.querySelectorAll("p")[1];
var count=0;

document.addEventListener("keypress",function(event){
    count++;
    p2.innerHTML="you have clicked "+count;
    var text=event.key;
    p1.innerHTML="ur fist clicked letter is "+text;
})