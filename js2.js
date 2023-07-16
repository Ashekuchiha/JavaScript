var H1=document.getElementsByTagName("h1")[0];
H1.innerHTML="i am h1 from js";

var D1= document.getElementsByTagName("div")[0];

var H4=document.createElement("h1");

var text4=document.createTextNode("i am h4 from js creat by js");

H4.appendChild(text4);

D1.appendChild(H4);

var H0=document.createElement("h1");

var text0=document.createTextNode("i am h0 from js creat by js");

H0.appendChild(text0);

D1.insertBefore(H0,H1);

var H2=document.getElementsByTagName("h1")[2];

//D1.removeChild(H2);