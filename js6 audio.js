var lan=document.querySelectorAll(".b").length;

for(var i=0;i<lan;i++){
    document.querySelectorAll(".b")[i].addEventListener("click",sound)
}

function sound(){
    var text = this.innerHTML;
    console.log(text);
    switch(text){
        case "aa":
            var audio = new Audio("/sound source/games_of_thrones.mp3");
            audio.play();
            break;
        case "bb":
            var audio = new Audio("/sound source/sasageyo.mp3");
            audio.play();
            break;
        case "cc":
            var audio = new Audio("/sound source/whistle.mp3");
            audio.play();
            break;
    }
    
}
