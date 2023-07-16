
class Student {
    
    constructor(name, age, cgpa, lang) {

        this.name = name;
        this.age = age;
        this.cgpa = cgpa;
        this.lang = lang;


        this.display = function () {
            document.write(this.name + " " + this.age + " " + this.cgpa + " " + this.lang);
        };
    }
}
var Student1=new Student("ashak",29,3.44,["bangla","english","german"]);
Student1.display();

var date= new Date();
document.write("<br\>"+date);
document.write("<br\>"+date.getFullYear());
document.write("<br\>"+date.getUTCSeconds());
document.write("<br\>"+date.getMilliseconds());

document.getElementById("id1").innerText=("web vi vi");
document.getElementsByClassName("cl1")[0].innerHTML=("web dada dada");
document.getElementsByTagName("p")[1].innerHTML=("this is pera 2 changed by js");

document.querySelector(".cl2").innerHTML=("this is pera 3 changed by js");

function f1(){
    document.querySelector("#i1").innerHTML=("u click button 1");
}
function f2(){
    document.querySelector("#i2").innerHTML=("u click button 2");
}
function f3(){
    var ima=document.querySelector(".ic");
    ima.src="/image source/itachi.jpg";
}
function f4(){
    document.querySelector(".ic").src="/image source/kakashi.jpg";
}

















