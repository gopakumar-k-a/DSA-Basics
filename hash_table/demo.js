

// for(let i=0;i<str.length;i++){
   
    
//     if(str[i]=='a'){
//         temp.push(str[i])
//     }
//     if(str[i+1]=='a'){
//         count++
//     }
//     if(temp.length>0){

//         temp.pop()
//     }
// }
// console.log(temp);
// console.log(count);

// [1,3,4,6,8]
// [8,6,4,3,1]

// let arr=[1,3,4,6,8]
// let temp=[]
// // console.log(arr.reverse());
// for(let i=arr.length-1;i>=0;i--){
//   temp.push(arr[i])
//--
// console.log(temp);

// let stack="Hello world"

// for(let i=stack.length;i>=0;i--){
 
    
// }

let arr=[7,6,4,6,7,8]

// let newSet=new Set(arr)
// console.log(newSet);

for(let i=0;i<arr.length;i++){
    // for(let j=i+1;j<arr.length;j++){
    //     if(arr[i]==arr[j]){
    //         arr.splice(j,1)
    //     }
    // }
     if(arr.includes(arr[i])){
        arr.splice(i,1)
     }
}


console.log(arr);




