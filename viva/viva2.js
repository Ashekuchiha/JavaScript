
const _ = require("lodash") 
let users=[
    {
        name:"raji",
        id: 18,
        gender:"female",
        age:32
    },{
        name:"ashak",
        id:2,
        gender:"male",
        age:22
    },{
        name:"soan",
        id:23,
        gender:"male",
        age:12
    }
]

// function find(users){
//     for(let i=0;i<users.length;i++){
//         if(users[i].age >= 20 && users[i].age <= 30){
//             console.log(users[i].name)
//         }
//     }
// }

// find(users)
for(let i=0;i<users.length;i++){
    const sum=_.sum(users[i])

}
console.log(sum)

//console.log(users.reduce((a,b)=>{return a.age+b.age}))
const arr=[2,5,9,7,13]

 console.log(arr.reduce((a,b)=>{return a+b}))