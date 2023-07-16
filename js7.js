
var lan = document.querySelectorAll("button").length;

for(var i = 0;i<lan;i++){
    var butt=document.querySelectorAll("button")[i];
    butt.addEventListener("click",function(){
        var text=this.innerHTML;
        addsound(text);
        addanime(text);
    })
}

function addsound(text){
    switch(text){
        case "a":
            var tone=new Audio("/sound source/games_of_thrones.mp3");
            tone.play();
            break;
        case "b":
                var tone=new Audio("/sound source/sasageyo.mp3");
                tone.play();
                break;
        case "c":
            var tone=new Audio("/sound source/whistle.mp3");
            tone.play();
            break;
    }
}
//it works for add animea
function addanime(text){
    var but=document.querySelector("."+text);
    but.classList.add("anime");

    setTimeout(function(){
        but.classList.remove("anime");
    },1000);
}
//it will work for key board key press
document.addEventListener("keypress",function(event){
    var tt=event.key;
    addanime(tt);
    addsound(tt);
})