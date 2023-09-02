//var H1 = document.querySelector("h1");

// function bc1(){
//     H1.innerHTML=("u click button 1");
// }

// function bc2(){
//     H1.innerHTML=("u click button 2");
// }
// function bc3(){
//     H1.innerHTML=("u click button 3");
// }
var lan=document.querySelectorAll(".b").length;
var i;
for(i=0;i<lan;i++){
    document.querySelectorAll(".b")[i].addEventListener("click",function (){

         var text = this.innerHTML;
         document.querySelector("h1").innerHTML = text + " is clicked";
    });
}




