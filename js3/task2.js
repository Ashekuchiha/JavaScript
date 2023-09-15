
//obj to string
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// //console.log(fruits)
// const stringFruits=fruits.toString()
// //console.log(stringFruits[6])

//string to obj
// const newString=stringFruits.split("");
// console.log(newString)
// console.log([...stringFruits])
// console.log(Array.from(stringFruits))
// console.log(Object.assign([], stringFruits))

var text = "hello"
var newText=[]
console.log(typeof(text))
for(let i=0;i<=text.length;i++){
    if(i%2==0){
        newText.push(text[i].toUpperCase())
    }else{
        newText.push(text[i])
    }
}
console.log(newText.toLocaleString())