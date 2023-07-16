var form = document.querySelector("form");

var Name = form.querySelector("div #name");
var Email = form.querySelector("div #email");
var Pass = form.querySelector("div #password");

form.addEventListener("submit",formHandler);

function formHandler(e){
    e.preventDefault();
    var userInfo={
        name:Name.value,
        email:Email.value,
        password:Pass.value,
    }
    console.log(userInfo);
    Name.value="";
    email.value="";
    Pass.value="";
}