// const numbers=[1,2,3,4,5]
// console.log(`
// length = ${numbers.length} and 
// array = ${numbers} and 
// type = ${typeof(numbers)}
// string =${numbers.toString()} and 
// type=${typeof(numbers.toString())} and 
// join =${numbers.join("-")} 
// type = ${typeof(numbers)}
// `)

const { trim, trimStart, trimEnd, pad, padStart, padEnd } = require("lodash");

// const numberss = [2,4,6,3,44]
// let removedLastValue=numberss.pop();
// console.log(removedLastValue);
// console.log(numberss)

// const numberss = [2,4,6,3,44]
// let removedFirstValue=numberss.shift();
// console.log(removedFirstValue);
// console.log(numberss)

// const numberss = [2,4,6,3,44]
// let addValueLast=numberss.push("hh");
// console.log(addValueLast);
// console.log(numberss)

// const numberss = [2,4,6,3,44]
// let addValueFirst=numberss.unshift("hh");
// console.log(addValueFirst);
// console.log(numberss)

// const numberss = [2,4,6,3,44]
// let addValueLast=numberss[numberss.length]="fffff";
// console.log(addValueLast);
// console.log(numberss)

// const numberss = [2,4,6,3,44]
// let del= delete numberss[1];
// numberss[1]=12
// console.log(del);
// console.log(numberss)

// const name1=["ashal","alif"]
// console.log(name1);
// const name2=["sarmin","shakil"]
// name3=name1.concat(name2,33,"hi");
// console.log(name3);

// const group=[[1,2,3],[4,5],8].flat();
// console.log(group);
// console.log(typeof(group));

// const numbers=[1,2,3,4,5];
// console.log(numbers);
// numbers.splice(2,2,"hh")//splice(strt,how many,item)
// console.log(numbers);

// const numbers=[1,2,3,4,5,"d"];
// console.log(numbers);
// const newNumbers=numbers.slice(3,5)
// console.log(newNumbers);

// let names=["ashik","shalil","jafor"]
// console.log(names.sort().reverse())
// let name=names[1];
// console.log(name);

// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ];
// console.log(cars)
// cars.sort(function(a, b){return a.year - b.year});
// console.log(cars)

// cars.sort(function(a, b){
//     let x = a.type.toLowerCase();
//     let y = b.type.toLowerCase();
//     if (x < y) {return -1;}
//     if (x > y) {return 1;}
//     return 0;
//   });
//   console.log(cars)

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(1,3);
// console.log(part)
// let name="ashak"
// let parts=name.slice(1,3)
// console.log(parts)

// let text = "Please visit Microsoft!";
// let text1 = "Please visit Microsoft and Microsoft";
// console.log(text)
// console.log(text1)
// let newText = text.replace("Microsoft", "W3Schools");
// console.log(newText)
// let newText1 = text1.replace(/Microsoft/g, "W3Schools");
// console.log(newText1)

// trim trimStart trimEnd
// pad padStart padEnd

let text="Hello world"
console.log(typeof(text))
console.log(text.charAt(0))
console.log(text.charCodeAt(0))
console.log(text.length)
console.log(text[0])
let textObj=text.split("");
console.log(typeof(textObj))
console.log(textObj)

