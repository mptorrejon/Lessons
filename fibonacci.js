console.log("Fibonacci");
let n1 = 0;
let n2 = 1;
let next;

function Fib(num) {
    let sum = Number.MAX_SAFE_INTEGER;
    for(var i=0; i<num; i++) {
        next = n1+n2;
        n1 = n2;
        n2 = next;
        // console.log(next);
        if(next%2 == 0) {
            sum = sum + next;
        }
    }
    console.log(sum);
}

Fib(4000000);