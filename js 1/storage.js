
localStorage.setItem("first name","ashak");
localStorage.setItem("last name","ul islam");
localStorage.setItem("age","24");
var language=["bangla","english","german"];
localStorage.setItem("languages",JSON.stringify(language));

const name=localStorage.getItem("first name");
const lastName=localStorage.getItem("last name");
const age=localStorage.getItem("age");
const languages=JSON.parse(localStorage.getItem("languages"));


document.write(`name : ${name} ${lastName} 
age : ${age} 
languages : ${languages}`);

localStorage.clear();