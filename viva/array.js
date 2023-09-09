const points = [40, 100, 1, 5, 25, 10,666,-1];
var pointsLength=points.length;
console.log(pointsLength)
function highLow(points){
    var sorted=points.sort((a,b)=>{return a-b})
    return `highest valu ${sorted[pointsLength-1]} lowest value ${sorted[0]}`
}
console.log(highLow(points))
const arr=[2,5,9,7,13]

const _=require("lodash")
const sum=_.sum(arr)
console.log(sum)