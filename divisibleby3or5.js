const MAX = 1000;

let sum = 0;
for( var i=1; i<MAX; i++) {
    if(i%3==0 || i%5==0) {
        sum = sum + i;
    }
}
console.log(sum)