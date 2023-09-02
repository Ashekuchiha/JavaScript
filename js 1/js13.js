// function call(){
//     var h1=document.createElement("h1");
//     var text;
//      var name=prompt("enter your name :");
//      if(name==null||name==""){
//         text="u didnt enter any name";
//      }else{
//         text="hi "+name;
//      }
//      var textn=document.createTextNode(text);
//      h1.appendChild(textn);
//      document.body.appendChild(h1);
// }


// var Btn=document.querySelector(".btn");
// var P=document.querySelector(".p");

// // Btn.addEventListener("click",function(){
// //     P.textContent="ur save is done";
// //     setInterval(()=>{
// //         P.textContent="";
// //     },3000)
// // })
// // call();

// Btn.addEventListener("click",clock);
// function clock(){
//     var time=new Date();
//     var h=time.getHours();
//     var m=time.getMinutes();
//     var s=time.getSeconds();
//     var t=h+":"+m+":"+s;
//     console.log(t);
//     P.textContent=t;
//     setInterval(clock, 1000);
    
 
// }

function sum(x,y,z,...q){
    //return x+y+z;
    console.log(x+y+z+q);
}
var a=[2,3,4,5];


//console.log(sum(1,2,3));
sum(...a);//spread array
 

















