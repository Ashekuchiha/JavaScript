var numbers=[12,23,34,45,56,4,6,9];

console.log("array print");
console.log(numbers);

console.log("normal for");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("for of");
for (const number of numbers) {
    console.log(number);
}

console.log("for in");
for (const number in numbers) {
    console.log(`${number} : ${numbers[number]}`);
}

console.log("for each 1");
numbers.forEach(
    function(x){
        console.log(x);
    }
)

console.log("for each 2");
var newArray=[];
numbers.forEach(
    function(x){
        newArray.push(x);
    }
)
console.log(newArray);

console.log("for each 3");
newArray1=[];
numbers.forEach(
    function(x){
        newArray1.push(x+10);
    }
)
console.log(newArray1);

console.log("map similar like for each 3");
newArray2=numbers.map(
    function(x){
        return x+100;
    }
)
console.log(newArray2);

console.log("for each 4");
numbers.forEach(
    function(x,i,arr){
        arr[i]=x+1;
    }
)
console.log(numbers);

var numbers1=[12,23,34,45,56,4,6,9];
console.log("filter");
filteredArray=numbers1.filter(
    function(x){
        return x<10;
    }
)
console.log(filteredArray);



