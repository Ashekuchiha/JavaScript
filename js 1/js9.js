var input = document.querySelector("input");
console.log(input);
input.addEventListener("change",inputHandler);
function inputHandler(e){
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.value);
}


var cheks = document.querySelectorAll("input[name=lang]");
console.log(cheks);

Array.from(cheks).map((chek)=>{
    chek.addEventListener("change",chekHandler);
})
function chekHandler(ee){
    // console.log(ee);
    // console.log(ee.type);
    // console.log(ee.target);
    // console.log(ee.target.id);
    // console.log(ee.target.className);
    // console.log(ee.target.value);
    if(ee.target.checked){
        console.log("checked");
    }
    //console.log("checked");
}

var select = document.querySelector("#program");
console.log(select);

select.addEventListener("change",selectHandler);

function selectHandler(eee){
    console.log("selected")
    console.log(eee.target.value);
    console.log(eee);
    console.log(eee.type);
    console.log(eee.target);
    console.log(eee.target.id);
    console.log(eee.target.className);
}



