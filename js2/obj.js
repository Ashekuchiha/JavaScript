const { log } = require("console");

const person = {
    first_name: "ashak",
    last_name: "islam",
    age:25,
    fullName:function(x){
        return this.first_name +" ul "+x+"  "+this.last_name
    }
}
person.first_name="alif"
console.log(person.fullName("4"));
