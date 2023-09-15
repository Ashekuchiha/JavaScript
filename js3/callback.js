function sum (num1,num2,callback){
    var sum=num1+num2
    callback(sum);
}
sum(2,3,(sum)=>{
    console.log(sum)
})