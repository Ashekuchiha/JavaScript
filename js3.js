
var photo = ["/image source/kakashi.jpg","/image source/sasukay.jpg","/image source/itachi.jpg"];
console.log(photo.length);
var ima = document.querySelector("#ii");

var count = 0;
function pri(){
    count--;
    if(count<0){
    count=photo.length-1;
    ima.src=photo[count];
    }
    else{
        ima.src=photo[count];
    }

}

function nex(){
    count++;
    if(count>=photo.length){
        count=0;
        ima.src=photo[count];
    }
    else{
        ima.src=photo[count];
    }
}