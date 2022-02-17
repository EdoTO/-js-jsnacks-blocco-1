
let i = 0;
let sum = 0;

while ( i < 5 ) {
    i++;
    const num = parseFloat(prompt('Inserire un numero'));

    if (!isNaN(num)) {
        sum += num;
    }
}

console.log(sum)