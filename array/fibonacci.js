//what is fibonocci series?
//each number is sum of preciding two ones
function fib(n){
    const fibSeries=[0,1]
    for(let i=2;i<n;i++){
        fibSeries[i]=fibSeries[i-1]+fibSeries[i-2]
    }
    return fibSeries
}

console.log('fibseries(0)',fib(0));
console.log('fibseries(1)',fib(1));
console.log('fibseries(2)',fib(2));
console.log('fibseries(3)',fib(3));
console.log('fibseries(4)',fib(4));
console.log('fibseries(5)',fib(5));
//result
// fibseries(0) [ 0, 1 ]
// fibseries(1) [ 0, 1 ]
// fibseries(2) [ 0, 1 ]
// fibseries(3) [ 0, 1, 1 ]      
// fibseries(4) [ 0, 1, 1, 2 ]   
// fibseries(5) [ 0, 1, 1, 2, 3 ]

//time complexity o(n) linear time complexity