
//Write a JavaScript program to find the most frequent item in an array.

let mostFreaquent = (arr) => {
    let cf = 1
    let mf = 0
    let elem = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (j >= i) {
                if (arr[i] == arr[j]) {
                    cf++
                }
            }
        }
        if ( cf>mf) {

            mf = cf
            elem = arr[i]

        }
        cf = 1
    }
    return elem
}

console.log(mostFreaquent([3,2,5,3,8,3,8,2]));