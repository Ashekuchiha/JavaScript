// const arr=[2,5,9,7,13]

// console.log(arr.reduce((a,b)=>{return a+b}))
// console.log(arr.reverse())
// console.log(arr.sort((a,b)=>{return a-b}))
// console.log(arr.sort((a,b)=>{return b-a}))
// const low=arr.sort((a,b)=>{return a-b})
// console.log(low[0])

// let user={
//     name:"ashak",
//     id:12
// }
// console.log(user)
// user.id=10
// console.log(user)
// user.company="sona"
// console.log(user)
// delete user.id
// console.log(user)

let users=[
    {
        name:"raji",
        id: 18,
        gender:"female",
        age:21
    },{
        name:"ashak",
        id:2,
        gender:"male",
        age:22
    },{
        name:"soan",
        id:23,
        gender:"male",
        age:32
    }
]
// console.log(users[0].id)
// console.log(Math.floor(Math.random()*10)+1)
// console.log(users)
// console.log(users.sort((a,b)=>{return a.age-b.age}))

var whichOne="ashak";
function find(users){
    for(let i=0;i<users.length;i++){
        if(users[i].age >= 20 && users[i].age <= 30){
            return i
        }
    }
}
console.log(users[find(users)].name)