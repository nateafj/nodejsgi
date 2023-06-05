'strict';
function sumFunction(arr){
let sum = 0;
for(let i = 0 ; i < arr.length; i++){
if( i > 1){
sum += Number(arr[i])
}
}
console.log(sum)
}

sumFunction(process.argv)