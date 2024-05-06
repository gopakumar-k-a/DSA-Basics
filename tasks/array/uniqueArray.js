
// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).


let unique=(arr)=>{
    let unique=new Set(arr)
    return Array.from(unique)
}


const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(unique(arr));
