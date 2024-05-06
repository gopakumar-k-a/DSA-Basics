//given an array of 'n' elements and a target element 't' ,
//find the index of 't' in the array.Return -1 if the target element is not found.

function findIndex(n,t){

    for(let i=0;i<n;i++){
       if(arr[i]==t){
        return i
       }
    }
    return -1
}

let arr=[1,3,7,45,78,33]
let t=45
let result=findIndex(arr.length,t)
console.log('result is ',result);

//t=10
//result is  -1

//t=45
//result is  3
