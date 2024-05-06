// Two Sum:
// Given an array of integers,
//  return indices of the two numbers such that they add up to a specific target.


let indicesFinder=(arr,target)=>{
    let result=[]
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(i!==j){
                if(arr[i]+arr[j]==target){
                  result.push([i,j])
                }
            }
        }
    }

    return result
}

const arr = [2, 7, 11, 15];
const target = 9;

console.log(indicesFinder(arr,target));